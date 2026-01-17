// Backend/routes/auth.js
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
const ACCESS_EXPIRES_IN = process.env.ACCESS_EXPIRES_IN || '15m';   // e.g. 15m
const REFRESH_EXPIRES_IN = process.env.REFRESH_EXPIRES_IN || '7d'; // e.g. 7d
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

// Helpers
function signAccessToken(userId) {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: ACCESS_EXPIRES_IN });
}
function signRefreshToken(userId) {
  return jwt.sign({ id: userId }, JWT_REFRESH_SECRET, { expiresIn: REFRESH_EXPIRES_IN });
}

// REGISTER
router.post(
  '/register',
  [
    body('instituteId').notEmpty().withMessage('Institute ID required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('username').isLength({ min: 3 }).withMessage('Username min 3 chars'),
    body('password').isLength({ min: 8 }).withMessage('Password min 8 chars'),
    body('year').notEmpty().withMessage('Year is required'),
    body('course').notEmpty().withMessage('Course is required')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    try {
      const {
        instituteId,
        email,
        username,
        interests,
        skills,
        year,
        course,
        password
      } = req.body;

      // Normalize and convert CSV -> arrays
      const interestsArray = interests
        ? String(interests).split(',').map(s => s.trim()).filter(Boolean)
        : [];
      const skillsArray = skills
        ? String(skills).split(',').map(s => s.trim()).filter(Boolean)
        : [];

      // Check unique fields
      const existing = await User.findOne({
        $or: [{ email }, { instituteId }, { username }]
      });
      if (existing) {
        // specify which field conflicts
        if (existing.email === email) return res.status(409).json({ message: 'Email already registered' });
        if (existing.instituteId === instituteId) return res.status(409).json({ message: 'Institute ID already used' });
        if (existing.username === username) return res.status(409).json({ message: 'Username already taken' });
        return res.status(409).json({ message: 'Account already exists' });
      }

      const newUser = new User({
        instituteId,
        email,
        username,
        interests: interestsArray,
        skills: skillsArray,
        year,
        course,
        password
      });

      await newUser.save();

      // Optionally auto-login: create tokens
      const accessToken = signAccessToken(newUser._id);
      const refreshToken = signRefreshToken(newUser._id);

      // Save refresh token to user
      newUser.refreshToken = refreshToken;
      await newUser.save();

      // Send refresh token as secure httpOnly cookie
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // true in prod (HTTPS)
        sameSite: 'lax',
        path: '/api/auth/refresh-token',
        maxAge: 7 * 24 * 60 * 60 * 1000 // matches REFRESH_EXPIRES_IN (7 days)
      });

      return res.status(201).json({
        message: 'Registered successfully',
        user: newUser.toJSON(),
        accessToken
      });
    } catch (err) {
      console.error(err);
      if (err.code === 11000) return res.status(409).json({ message: 'Duplicate field error' });
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// LOGIN
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email required'),
    body('password').exists().withMessage('Password required')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    try {
      const { email, password } = req.body;
      // Need password for compare -> select it
      const user = await User.findOne({ email }).select('+password +refreshToken');
      if (!user) return res.status(401).json({ message: 'Invalid credentials' });

      const match = await user.comparePassword(password);
      if (!match) return res.status(401).json({ message: 'Invalid credentials' });

      const accessToken = signAccessToken(user._id);
      const refreshToken = signRefreshToken(user._id);

      // Save refresh token to DB (rotate)
      user.refreshToken = refreshToken;
      await user.save();

      // Send refresh token cookie
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/api/auth/refresh-token',
        maxAge: 7 * 24 * 60 * 60 * 1000
      });

      return res.json({ message: 'Logged in', accessToken, user: user.toJSON() });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// REFRESH TOKEN
// client should call POST /api/auth/refresh-token with cookie present
router.post('/refresh-token', async (req, res) => {
  try {
    const tokenFromCookie = req.cookies?.refreshToken;
    if (!tokenFromCookie) return res.status(401).json({ message: 'No refresh token provided' });

    // Verify token
    let payload;
    try {
      payload = jwt.verify(tokenFromCookie, JWT_REFRESH_SECRET);
    } catch (err) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }

    // Find user and check stored refresh token (rotation)
    const user = await User.findById(payload.id).select('+refreshToken');
    if (!user || !user.refreshToken) return res.status(401).json({ message: 'No matching session' });
    if (user.refreshToken !== tokenFromCookie) {
      // possible token reuse attack — clear refresh token
      user.refreshToken = null;
      await user.save();
      return res.status(403).json({ message: 'Refresh token mismatch' });
    }

    // Issue new tokens
    const newAccessToken = signAccessToken(user._id);
    const newRefreshToken = signRefreshToken(user._id);

    user.refreshToken = newRefreshToken;
    await user.save();

    // Set new cookie
    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/api/auth/refresh-token',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.json({ accessToken: newAccessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// LOGOUT (invalidate refresh token)
router.post('/logout', async (req, res) => {
  try {
    const tokenFromCookie = req.cookies?.refreshToken;
    if (!tokenFromCookie) {
      // Still clear cookie to be safe
      res.clearCookie('refreshToken', { path: '/api/auth/refresh-token' });
      return res.json({ message: 'Logged out' });
    }

    // Verify to find user id (optional)
    try {
      const payload = jwt.verify(tokenFromCookie, JWT_REFRESH_SECRET);
      const user = await User.findById(payload.id).select('+refreshToken');
      if (user) {
        user.refreshToken = null;
        await user.save();
      }
    } catch (err) {
      // token invalid — still clear cookie
    }

    res.clearCookie('refreshToken', { path: '/api/auth/refresh-token' });
    res.json({ message: 'Logged out' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// PROTECTED: get current user
const authMiddleware = require('../middleware/auth');
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password -refreshToken');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;