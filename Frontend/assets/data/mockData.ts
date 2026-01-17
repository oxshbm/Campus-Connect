import type { Group, GroupDetails } from '../types';

export const DUMMY_GROUPS: Group[] = [
  {
    id: 'grp1',
    name: 'Data Structures & Algorithms',
    description: 'Preparing for technical interviews and mastering fundamental concepts.',
    tags: ['DSA', 'LeetCode', 'Python'],
    members: [{ id: 'u1', name: 'Alice' }, { id: 'u2', name: 'Bob' }],
    campus: 'Main Campus',
    createdAt: '2025-07-25',
  },
  {
    id: 'grp2',
    name: 'Web Development Basics',
    description: 'A study group for beginners learning HTML, CSS, and JavaScript.',
    tags: ['Frontend', 'WebDev', 'HTML', 'CSS'],
    members: [{ id: 'u3', name: 'Charlie' }],
    campus: 'Main Campus',
    createdAt: '2025-07-28',
  },
  {
    id: 'grp3',
    name: 'Intro to Machine Learning',
    description: 'Weekly sessions to discuss concepts from Andrew Ng\'s course.',
    tags: ['ML', 'AI', 'Python', 'Coursera'],
    members: [{ id: 'u4', name: 'David' }, { id: 'u5', name: 'Eve' }, { id: 'u1', name: 'Alice' }],
    campus: 'Satellite Campus',
    createdAt: '2025-07-30',
  },
  {
    id: 'grp4',
    name: 'Mobile App Development',
    description: 'A group for learning React Native and Swift for iOS development.',
    tags: ['Mobile', 'React Native', 'Swift'],
    members: [{ id: 'u6', name: 'Frank' }, { id: 'u7', name: 'Grace' }],
    campus: 'Main Campus',
    createdAt: '2025-08-01',
  },
];

export const DUMMY_GROUP_DETAILS: GroupDetails[] = [
  {
    id: 'grp1',
    name: 'Data Structures & Algorithms',
    description: 'Preparing for technical interviews and mastering fundamental concepts.',
    members: [{ id: 'u1', name: 'Alice' }, { id: 'u2', name: 'Bob' }],
    chatMessages: [
      { user: 'Alice', text: 'Hey everyone, let\'s discuss the big-O notation today.', timestamp: '10:00 AM' },
      { user: 'Bob', text: 'Sounds good! I have some questions about space complexity.', timestamp: '10:05 AM' },
    ],
    resources: [
      { name: 'Big-O Notation Cheatsheet', url: 'https://example.com/cheatsheet.pdf' },
      { name: 'LeetCode Problem List', url: 'https://leetcode.com/problem-list' },
    ],
  },
  {
    id: 'grp2',
    name: 'Web Development Basics',
    description: 'A study group for beginners learning HTML, CSS, and JavaScript.',
    members: [{ id: 'u3', name: 'Charlie' }],
    chatMessages: [{ user: 'Charlie', text: 'Welcome to the group!', timestamp: '11:00 AM' }],
    resources: [{ name: 'MDN Web Docs', url: 'https://developer.mozilla.org/' }],
  },
  {
    id: 'grp3',
    name: 'Intro to Machine Learning',
    description: 'Weekly sessions to discuss concepts from Andrew Ng\'s course.',
    members: [{ id: 'u4', name: 'David' }, { id: 'u5', name: 'Eve' }, { id: 'u1', name: 'Alice' }],
    chatMessages: [],
    resources: [],
  },
  {
    id: 'grp4',
    name: 'Mobile App Development',
    description: 'A group for learning React Native and Swift for iOS development.',
    members: [{ id: 'u6', name: 'Frank' }, { id: 'u7', name: 'Grace' }],
    chatMessages: [
        { user: 'Frank', text: 'Hey everyone, let\'s start with React Native basics this week.', timestamp: '09:00 AM' },
    ],
    resources: [
        { name: 'React Native Docs', url: 'https://reactnative.dev/' },
        { name: 'Apple Swift Docs', url: 'https://docs.swift.org/swift-book/' },
    ],
  },
];
