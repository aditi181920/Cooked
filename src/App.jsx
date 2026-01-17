import React from 'react';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">HOW COOKED ARE YOU?</h1>
        <p className="app-subtitle">🔥 Answer honestly, if you dare 🔥</p>
      </header>
      
      <main className="app-main">
        <Quiz />
      </main>
      
      <footer className="app-footer">
        <p>Made with 🔥 | Just for fun</p>
      </footer>
    </div>
  );
}

export default App;