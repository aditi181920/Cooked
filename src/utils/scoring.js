export function calculateResult(totalScore, maxScore) {
  const percentage = (totalScore / maxScore) * 100;
  
  if (percentage <= 20) {
    return {
      tier: 'Freshly Baked',
      emoji: '✨😎✨',
      color: '#4ecdc4',
      description: "You're absolutely thriving! Your life balance is on point. You're living your best life!",
      advice: "Keep doing what you're doing. You've mastered the art of not being cooked.",
      animation: 'glow-pulse'
    };
  } else if (percentage <= 40) {
    return {
      tier: 'Lightly Toasted',
      emoji: '🍞😊',
      color: '#ffe66d',
      description: "A little crispy around the edges, but you're doing fine! Nothing a small reset can't fix.",
      advice: "Maybe cut back on screen time before bed and get some fresh air.",
      animation: 'gentle-bounce'
    };
  } else if (percentage <= 60) {
    return {
      tier: 'Medium Burnt',
      emoji: '🔥😅💦',
      color: '#ff9f1c',
      description: "You're running on fumes and vibes. The burnout is real. Time to take a step back.",
      advice: "Take a proper break. Your body is literally screaming for rest.",
      animation: 'nervous-shake'
    };
  } else if (percentage <= 80) {
    return {
      tier: 'Deep Fried',
      emoji: '💀😵‍💫',
      color: '#e71d36',
      description: "You're cooked. Like, legitimately overcooked. This is a cry for help disguised as a quiz result.",
      advice: "Put everything down. Sleep for 12 hours. Delete half your apps. We're serious.",
      animation: 'dizzy-spin'
    };
  } else {
    return {
      tier: 'Charred Remains',
      emoji: '☠️💀☠️',
      color: '#2d132c',
      description: "You've transcended cooking. You're carbon. Dust. A warning to others. How are you even functioning?",
      advice: "Immediate intervention required. Take a week off. Touch grass. See sunlight. Please.",
      animation: 'collapse'
    };
  }
}

export function getCategoryBreakdown(answers, questions) {
  const categories = {};
  
  questions.forEach((question, index) => {
    const category = question.category;
    const answer = answers[index];
    
    if (!categories[category]) {
      categories[category] = { total: 0, count: 0 };
    }
    
    categories[category].total += answer.value; // 0 or 1
    categories[category].count += 1;
  });
  
  return Object.entries(categories).map(([name, data]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    percentage: Math.round((data.total / data.count) * 100)
  }));
}