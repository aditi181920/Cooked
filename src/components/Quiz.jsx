import React, { useState, useEffect } from 'react';
import { fetchQuestions } from '../services/api';
import Question from './Question';
import Character from './Character';
import Result from './Result';
import '../styles/Quiz.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [emotion, setEmotion] = useState('peek');
  const [message, setMessage] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    setLoading(true);
    const data = await fetchQuestions(15); // 15 questions
    setQuestions(data);
    setLoading(false);
  };

  const handleAnswer = (answer) => {
    // Show character reaction
    showReaction(answer.value);
    
    // Save answer
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    // Move to next question after animation
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setEmotion('peek');
        setMessage('');
      } else {
        setIsComplete(true);
      }
    }, 1200);
  };

  const showReaction = (value) => {
    if (value === 0) {
      // Answered No (good)
      setEmotion('happy');
      setMessage('Nice!');
    } else {
      // Answered Yes (cooked)
      const reactions = [
        { emotion: 'concerned', message: 'Oof...' },
        { emotion: 'shocked', message: 'Oh no!' },
        { emotion: 'concerned', message: 'Yikes!' },
        { emotion: 'shocked', message: 'Really?!' }
      ];
      const random = reactions[Math.floor(Math.random() * reactions.length)];
      setEmotion(random.emotion);
      setMessage(random.message);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setIsComplete(false);
    setEmotion('peek');
    setMessage('');
    loadQuestions();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">🔥</div>
        <p>Loading questions...</p>
      </div>
    );
  }

  if (isComplete) {
    return <Result answers={answers} questions={questions} onRestart={handleRestart} />;
  }

  return (
    <div className="quiz-container">
      <Character emotion={emotion} message={message} />
      <Question
        question={questions[currentIndex]}
        onAnswer={handleAnswer}
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default Quiz;