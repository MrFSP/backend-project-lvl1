import { getRandomInt } from '../utils/functions';

import game from '..';

const maxNum = 100; // High border of numbers

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
// Get random simple number on the segment [2, max]
const getRandomTypeNumber = (max = maxNum) => {
  const typeNumber = getRandomInt(0, 1) === 1 ? 'prime' : 'complex';
  let answer;
  switch (typeNumber) {
    case 'prime':
      answer = getRandomInt(2, max);
      while (!isPrime(answer)) {
        answer = getRandomInt(2, max);
      }
      break;
    case 'complex':
      answer = getRandomInt(4, max);
      while (isPrime(answer)) {
        answer = getRandomInt(4, max);
      }
      break;
    default:
      return null;
  }
  return answer;
};

const getData = () => {
  const question = getRandomTypeNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => game(task, getData);
