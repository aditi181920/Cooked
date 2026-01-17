export const fallbackQuestions = [
  {
    id: 1,
    text: "Did you hit snooze at least once this morning?",
    category: "sleep"
  },
  {
    id: 2,
    text: "Did you go to bed after midnight last night?",
    category: "sleep"
  },
  {
    id: 3,
    text: "Do you check your phone within 5 minutes of waking up?",
    category: "screen"
  },
  {
    id: 4,
    text: "Did you scroll for more than 30 minutes before bed?",
    category: "screen"
  },
  {
    id: 5,
    text: "Have you eaten more snacks than meals today?",
    category: "food"
  },
  {
    id: 6,
    text: "Did you open an app 'for one thing' and stay 30+ minutes?",
    category: "screen"
  },
  {
    id: 7,
    text: "Do you feel dread when you get unexpected plans?",
    category: "social"
  },
  {
    id: 8,
    text: "Do you have more than 20 browser tabs open right now?",
    category: "productivity"
  },
  {
    id: 9,
    text: "Have you canceled plans this week and felt relief?",
    category: "social"
  },
  {
    id: 10,
    text: "Is your to-do list from last week still haunting you?",
    category: "productivity"
  },
  {
    id: 11,
    text: "Do you always eat while watching something?",
    category: "food"
  },
  {
    id: 12,
    text: "Have you felt 'over it' more than 3 times this week?",
    category: "mental"
  },
  {
    id: 13,
    text: "Have you said 'I'll do it tomorrow' about the same thing 3+ times?",
    category: "productivity"
  },
  {
    id: 14,
    text: "Has it been more than 3 hours since you drank water?",
    category: "health"
  },
  {
    id: 15,
    text: "Is your posture terrible right now?",
    category: "health"
  },
  {
    id: 16,
    text: "Do you scroll while eating every meal?",
    category: "screen"
  },
  {
    id: 17,
    text: "Have you had an existential crisis this week?",
    category: "mental"
  },
  {
    id: 18,
    text: "Do you set 5+ alarms to wake up?",
    category: "sleep"
  },
  {
    id: 19,
    text: "Do you doom-scroll when you're anxious?",
    category: "screen"
  },
  {
    id: 20,
    text: "Have you avoided going outside today?",
    category: "health"
  },
  {
    id: 21,
    text: "Do you work best under last-minute pressure?",
    category: "productivity"
  },
  {
    id: 22,
    text: "Have you forgotten what day it is this week?",
    category: "mental"
  },
  {
    id: 23,
    text: "Do you pretend not to see people to avoid small talk?",
    category: "social"
  },
  {
    id: 24,
    text: "Have you stress-bought something online recently?",
    category: "mental"
  },
  {
    id: 25,
    text: "Do you say 'I'm tired' at least once a day?",
    category: "health"
  },
  {
    id: 26,
    text: "Have you worn the same outfit 2+ days in a row?",
    category: "health"
  },
  {
    id: 27,
    text: "Do you caffeinate just to function?",
    category: "health"
  },
  {
    id: 28,
    text: "Have you started a sentence with 'I'm fine' while lying?",
    category: "mental"
  },
  {
    id: 29,
    text: "Do you make plans knowing you'll probably cancel?",
    category: "social"
  },
  {
    id: 30,
    text: "Are you doing something else while taking this quiz?",
    category: "screen"
  }
];

// Randomly select questions
export function getRandomQuestions(count = 15) {
  const shuffled = [...fallbackQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}