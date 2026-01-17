import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DUMMY_GROUPS } from '../../assets/data/mockData';
import type { Group } from '../../assets/types';

const GroupList: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    setGroups(DUMMY_GROUPS);
  }, []);

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1a202c', marginBottom: '1rem', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
          Explore Study Groups
        </h1>
        <Link
          to="/groups/create"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundImage: 'linear-gradient(to right, #4facfe, #00f2fe)',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '9999px',
            boxShadow: '0 4px 15px rgba(0, 194, 254, 0.3)',
            textDecoration: 'none',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            whiteSpace: 'nowrap'
          }}
        >
          Create a Group
        </Link>
      </div>

      {/* Add Search Bar */}
      <div style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search groups by name, description, or tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '1rem 1.5rem',
            fontSize: '1rem',
            border: '1px solid #e5e7eb',
            borderRadius: '9999px',
            outline: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            color: '#1a202c',
            backgroundColor: 'white',
            transition: 'all 0.3s ease'
          }}
        />
      </div>

      <main style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '2rem' 
      }}>
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group) => (
            <Link 
              to={`/groups/${group.id}`} 
              key={group.id} 
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                color: '#1f2937',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem', 
                color: '#1a202c' 
              }}>
                {group.name}
              </h2>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '1rem', 
                overflow: 'hidden', 
                textOverflow: 'ellipsis', 
                display: '-webkit-box', 
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical', 
                flexGrow: 1 
              }}>
                {group.description}
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem', 
                marginBottom: '1.5rem' 
              }}>
                {group.tags.map((tag: string) => (
                  <span 
                    key={tag} 
                    style={{ 
                      backgroundColor: '#e3f2fd', 
                      color: '#0d47a1', 
                      fontSize: '0.8rem', 
                      fontWeight: '600', 
                      padding: '0.3rem 0.8rem', 
                      borderRadius: '9999px' 
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ 
                fontSize: '0.9rem', 
                color: '#6b7280', 
                display: 'flex', 
                alignItems: 'center' 
              }}>
                <span style={{ 
                  fontWeight: 'bold', 
                  marginRight: '0.25rem', 
                  color: '#1a202c' 
                }}>
                  {group.members.length}
                </span> 
                Members
              </div>
            </Link>
          ))
        ) : (
          <p style={{ 
            textAlign: 'center', 
            color: '#6b7280', 
            marginTop: '2.5rem', 
            fontSize: '1.125rem', 
            gridColumn: '1 / -1' 
          }}>
            No study groups found. Be the first to create one!
          </p>
        )}
      </main>
    </div>
  );
};

export default GroupList;