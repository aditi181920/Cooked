import React from 'react';
import '../styles/Question.css';

const Question = ({ question, onAnswer, questionNumber, totalQuestions }) => {
  return (
    <div className="question-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        />
      </div>
      
      <div className="question-header">
        <span className="question-number">Question {questionNumber} of {totalQuestions}</span>
      </div>
      
      <h2 className="question-text">{question.text}</h2>
      
      <div className="yes-no-buttons">
        <button
          className="answer-button no-button"
          onClick={() => onAnswer({ answer: 'No', value: 0 })}
        >
          <span className="button-emoji">👍</span>
          <span className="button-text">No</span>
        </button>
        
        <button
          className="answer-button yes-button"
          onClick={() => onAnswer({ answer: 'Yes', value: 1 })}
        >
          <span className="button-emoji">😬</span>
          <span className="button-text">Yes</span>
        </button>
      </div>
    </div>
  );
};

export default Question;