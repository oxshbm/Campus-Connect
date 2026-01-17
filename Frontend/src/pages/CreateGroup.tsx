import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateGroup: React.FC = () => {
  const [groupName, setGroupName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const navigate = useNavigate();

  // State for hover effects
  const [isHoveringCreate, setIsHoveringCreate] = useState(false);

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend API.
    const newGroupData = {
      groupName,
      description,
      tags: tags.split(',').map(tag => tag.trim()),
    };
    console.log('New group data:', newGroupData);

    // After a successful API call, you would likely navigate the user.
    alert('Group created successfully!');
    navigate('/groups');
  };

  const createButtonStyles = {
    padding: '0.75rem 1.5rem',
    backgroundImage: isHoveringCreate
      ? 'linear-gradient(to right, #00c6ff, #0072ff)'
      : 'linear-gradient(to right, #4facfe, #00f2fe)',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '9999px',
    boxShadow: isHoveringCreate ? '0 6px 20px rgba(0, 194, 254, 0.4)' : '0 4px 15px rgba(0, 194, 254, 0.3)',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    transform: isHoveringCreate ? 'translateY(-2px)' : 'translateY(0)',
  };

  const inputStyles = {
    padding: '0.75rem 1.25rem',
    border: '1px solid #e0e0e0',
    borderRadius: '9999px',
    outline: 'none',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    color: '#1a202c',
  };

  const textareaStyles = {
    ...inputStyles,
    borderRadius: '0.75rem',
    minHeight: '100px',
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '2.5rem', backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#1a202c', marginBottom: '2rem', textAlign: 'center', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>Create a New Study Group</h1>
      <form onSubmit={handleCreateGroup} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="groupName" style={{ fontSize: '1rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Group Name</label>
          <input
            type="text"
            
            id="groupName"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
            style={inputStyles}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="description" style={{ fontSize: '1rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={textareaStyles}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="tags" style={{ fontSize: '1rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Tags (e.g., Python, DSA, WebDev)</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            style={inputStyles}
          />
          <small style={{ color: '#6b7280', marginTop: '0.5rem', marginLeft: '1rem' }}>Separate tags with a comma.</small>
        </div>

        <button
          type="submit"
          style={createButtonStyles}
          onMouseEnter={() => setIsHoveringCreate(true)}
          onMouseLeave={() => setIsHoveringCreate(false)}
        >
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;