import { getRandomInt, isInt } from '../utils/functions';

import game from '..';

const highBorderOfNumbers = 100; // High border of numbers (min 100)

const task = 'Find the greatest common divisor of given numbers.';

const getNum = () => {
  const multy = getRandomInt(2, highBorderOfNumbers / 10);
  const num1 = multy * getRandomInt(2, 10);
  let num2 = num1;
  while (num1 === num2) {
    num2 = multy * getRandomInt(2, 10);
  }
  return { num1, num2 };
};

const getGreatestCommonDivisor = (n1, n2) => {
  const minNumber = n1 < n2 ? n1 : n2;
  let divisor = minNumber;
  while (divisor > 2) {
    if ((isInt(n1, divisor) === true) && (isInt(n2, divisor) === true)) {
      break;
    }
    divisor -= 1;
  }
  return divisor;
};

const gcd = () => {
  const { num1, num2 } = getNum();
  const answer = String(getGreatestCommonDivisor(num1, num2));
  const question = `${num1} ${num2}`;
  return { question, answer };
};

export default () => game(task, gcd);
