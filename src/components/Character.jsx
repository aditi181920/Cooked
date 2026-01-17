import React from 'react';
import '../styles/Character.css';

const Character = ({ emotion = 'peek', message = '' }) => {
  const getEmoji = () => {
    switch (emotion) {
      case 'peek': return '🙈';
      case 'happy': return '😊';
      case 'concerned': return '😬';
      case 'shocked': return '😱';
      default: return '🙈';
    }
  };

  return (
    <div className="character-container">
      <div className={`character character-${emotion}`}>
        <div className="emoji">{getEmoji()}</div>
      </div>
      {message && (
        <div className="thought-bubble">
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};

export default Character;