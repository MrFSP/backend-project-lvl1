import { getRandomInt } from '../utils/functions';

import game from '..';

const maxNum = 100; // High border of numbers

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
// Get random simple number on the segment [2, max]
const getRanNum = (str, max) => {
  let answer;
  // eslint-disable-next-line default-case
  switch (str) {
    case 'simple':
      answer = getRandomInt(3, max);
      while (isPrime(answer) === true) {
        answer = getRandomInt(3, max);
      }
      break;
    case 'complex':
      answer = getRandomInt(2, max);
      while (isPrime(answer) !== true) {
        answer = getRandomInt(2, max);
      }
      break;
  }
  return answer;
};

const prime = () => {
  const isPrimeForGame = getRandomInt(0, 1) === 1;
  const number = isPrimeForGame ? getRanNum('simple', maxNum) : getRanNum('complex', maxNum);
  const question = number;
  const answer = isPrime(question) === true ? 'yes' : 'no';
  return { question, answer };
};

export default () => game(task, prime);
