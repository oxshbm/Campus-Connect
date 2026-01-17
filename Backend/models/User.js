// Backend/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 12;

const UserSchema = new mongoose.Schema({
  instituteId: { type: String, required: true, trim: true, unique: true },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true, 
    validate: {
      validator: (v) => !!v && (v.endsWith('.edu') || v.includes('.ac.in')),
      message: 'Invalid institute email'
    }
  },
  username: { type: String, required: true, trim: true, unique: true },
  interests: { type: [String], default: [] },
  skills: { type: [String], default: [] },
  year: {
    type: String,
    required: true,
    enum: ['1st Year', '2nd Year', '3rd Year', '4th Year']
  },
  course: { type: String, required: true, trim: true },
  password: { type: String, required: true, minlength: 8, select: false },
  isVerified: { type: Boolean, default: false },
  refreshToken: { type: String, default: null }, // store latest refresh token
  createdAt: { type: Date, default: Date.now }
},
{ timestamps: true });

// Hash password before save
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
  
// Compare password (note: models queries must select +password)
UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Hide sensitive fields in JSON
UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.refreshToken;
  return obj;
};

module.exports = mongoose.model('User', UserSchema);