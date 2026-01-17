import axios from 'axios';
import { getRandomQuestions } from '../data/questions';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';
const TIMEOUT = 5000; // 5 seconds

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetchQuestions(count = 15) {
  try {
    const response = await api.get(`/questions/random?count=${count}`);
    
    if (response.data && response.data.length > 0) {
      console.log('✅ Fetched questions from backend');
      return response.data;
    }
    
    console.warn('⚠️ Backend returned empty, using fallback');
    return getRandomQuestions(count);
    
  } catch (error) {
    console.warn('⚠️ Backend unavailable, using fallback questions', error.message);
    return getRandomQuestions(count);
  }
}

export async function getStats() {
  try {
    const response = await api.get('/stats');
    return response.data;
  } catch (error) {
    return { totalPlays: 0, totalQuestions: 30 };
  }
}