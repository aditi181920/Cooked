import React from 'react';
import { calculateResult, getCategoryBreakdown } from '../utils/scoring';
import '../styles/Result.css';

const Result = ({ answers, questions, onRestart }) => {
  const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);
  const maxScore = questions.length; // Each question worth 1 point
  const result = calculateResult(totalScore, maxScore);
  const breakdown = getCategoryBreakdown(answers, questions);

  const handleShare = () => {
    const text = `I just took the "How Cooked Are You?" quiz and got: ${result.tier} (${totalScore}/${maxScore}) 🔥\n\nTake the quiz yourself!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'How Cooked Are You?',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text + '\n' + window.location.href);
      alert('Result copied to clipboard!');
    }
  };

  return (
    <div className="result-container">
      <div className="result-card">
        <h1 className="result-title">Your Results</h1>
        
        <div className={`result-character result-${result.animation}} style={{ color: result.color }`}>
          <div className="result-emoji">{result.emoji}</div>
        </div>
        
        <h2 className="result-tier" style={{ color: result.color }}>
          {result.tier}
        </h2>
        
        <div className="result-score">
          You answered "Yes" to {totalScore} out of {maxScore} questions
        </div>
        
        <p className="result-description">{result.description}</p>
        
        <div className="result-advice">
          <strong>💡 Advice:</strong> {result.advice}
        </div>
        
        <div className="breakdown-section">
          <h3>Your Cookedness Breakdown</h3>
          {breakdown.map((category) => (
            <div key={category.name} className="breakdown-item">
              <div className="breakdown-label">{category.name}</div>
              <div className="breakdown-bar">
                <div 
                  className="breakdown-fill" 
                  style={{ 
                    width: `${category.percentage}%`,
                    backgroundColor: category.percentage > 70 ? '#e71d36' : 
                                   category.percentage > 50 ? '#ff9f1c' : '#4ecdc4'
                  }}
                />
              </div>
              <div className="breakdown-percentage">{category.percentage}%</div>
            </div>
          ))}
        </div>
        
        <div className="result-actions">
          <button className="share-button" onClick={handleShare}>
            📤 Share Your Results
          </button>
          <button className="restart-button" onClick={onRestart}>
            🔄 Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;