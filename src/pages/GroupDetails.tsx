import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// --- Type Definitions (could be in a separate file like 'types.ts') ---
interface GroupDetailsType {
  id: string;
  name: string;
  description: string;
  members: { id: string; name: string }[];
  chatMessages: { user: string; text: string; timestamp: string }[];
  resources: { name: string; url: string }[];
}

// --- Mock Data (for demonstration) ---
export const DUMMY_GROUP_DETAILS: GroupDetailsType[] = [
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

const GroupDetails: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const [group, setGroup] = useState<GroupDetailsType | null>(null);
  const [currentTab, setCurrentTab] = useState<'chat' | 'resources' | 'calendar'>('chat');

  useEffect(() => {
    const foundGroup = DUMMY_GROUP_DETAILS.find(g => g.id === groupId);
    if (foundGroup) {
      setGroup(foundGroup);
    } else {
      console.error(`Group with ID "${groupId}" not found.`);
    }
  }, [groupId]);

  if (!group) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-xl text-gray-600 mb-4">Loading group details...</div>
          <Link to="/groups" className="text-blue-500 hover:text-blue-600">
            ← Back to Groups
          </Link>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (currentTab) {
      case 'chat':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)', marginBottom: '1rem' }}>
              {group.chatMessages.length > 0 ? (
                group.chatMessages.map((msg, index) => (
                  <div key={index} style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                    <strong style={{ fontSize: '0.875rem', color: '#2563eb' }}>{msg.user}:</strong>
                    <p style={{ color: '#1f2937' }}>{msg.text}</p>
                    <span style={{ fontSize: '0.75rem', color: '#9ca3af', float: 'right' }}>{msg.timestamp}</span>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: 'center', color: '#6b7280' }}>No messages yet. Start the conversation!</p>
              )}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="text" placeholder="Type a message..." style={{ flexGrow: 1, padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', outline: 'none' , color: 'black' }} />
              <button style={{ padding: '0.5rem 1.5rem', backgroundColor: '#2563eb', color: 'white', borderRadius: '0.5rem', border: 'none' }}>
                Send
              </button>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Shared Resources</h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {group.resources.length > 0 ? (
                group.resources.map((resource, index) => (
                  <li key={index} style={{ backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                    {resource.url && (
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                        {resource.name}
                        </a>
                    )}
                  </li>
                ))
              ) : (
                <p style={{ textAlign: 'center', color: '#6b7280' }}>No resources have been shared yet.</p>
              )}
            </ul>
            <button style={{ marginTop: '1rem', padding: '0.5rem 1.5rem', backgroundColor: '#10b981', color: 'white', borderRadius: '0.5rem', border: 'none' }}>
              Add Resource
            </button>
          </div>
        );
      case 'calendar':
        return (
          <div style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' , color:'black'}}>Group Calendar</h3>
            <p style={{ color: '#4b5563' }}>This is where the calendar for scheduling study sessions would be implemented.</p>
          </div>
        );
    }
  };

  return (
    <div style={{ maxWidth: '896px', margin: '0 auto', padding: '2rem', backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
      <Link 
        to="/groups" 
        style={{ 
          display: 'inline-block',
          marginBottom: '1rem',
          color: '#2563eb',
          textDecoration: 'none',
          fontSize: '0.875rem'
        }}
      >
        ← Back to Groups
      </Link>
      <header style={{ textAlign: 'center', borderBottom: '1px solid #e5e7eb', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937' }}>{group.name}</h1>
        <p style={{ color: '#4b5563', marginTop: '0.5rem' }}>{group.description}</p>
        <button style={{ marginTop: '1rem', padding: '0.5rem 1.5rem', backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: 'none' }}>
          Join Group
        </button>
      </header>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: '1rem', borderBottom: '2px solid #e5e7eb', marginBottom: '1.5rem' }}>
        <button onClick={() => setCurrentTab('chat')} style={{ padding: '0.5rem 1rem', fontWeight: '500', transition: 'color 0.2s', color: currentTab === 'chat' ? '#2563eb' : '#6b7280', borderBottom: currentTab === 'chat' ? '2px solid #2563eb' : '2px solid transparent', backgroundColor: 'transparent', borderLeft: 'none', borderTop: 'none', borderRight: 'none', cursor: 'pointer' }}>
          Chat
        </button>
        <button onClick={() => setCurrentTab('resources')} style={{ padding: '0.5rem 1rem', fontWeight: '500', transition: 'color 0.2s', color: currentTab === 'resources' ? '#2563eb' : '#6b7280', borderBottom: currentTab === 'resources' ? '2px solid #2563eb' : '2px solid transparent', backgroundColor: 'transparent', borderLeft: 'none', borderTop: 'none', borderRight: 'none', cursor: 'pointer' }}>
          Resources
        </button>
        <button onClick={() => setCurrentTab('calendar')} style={{ padding: '0.5rem 1rem', fontWeight: '500', transition: 'color 0.2s', color: currentTab === 'calendar' ? '#2563eb' : '#6b7280', borderBottom: currentTab === 'calendar' ? '2px solid #2563eb' : '2px solid transparent', backgroundColor: 'transparent', borderLeft: 'none', borderTop: 'none', borderRight: 'none', cursor: 'pointer' }}>
          Calendar
        </button>
      </nav>

      <main style={{ minHeight: '400px' }}>
        {renderTabContent()}
      </main>
    </div>
  );
};

export default GroupDetails;