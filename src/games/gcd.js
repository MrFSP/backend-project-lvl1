import { getRandomInt, isInt } from '../utils/functions';

import game from '..';

const highBorderOfNumbers = 100; // High border of numbers
const maxRanMinCommonDivisor = 20; // Max number of random min common divisor
const task = 'Find the greatest common divisor of given numbers.\n';

const getNumber = (minCommonDivisor) => {
  let result;
  while (result % minCommonDivisor !== 0) {
    result = getRandomInt(2, highBorderOfNumbers);
  }
  return result;
};

const number2 = (num1, minCommonDivisor) => {
  let answer = getNumber(minCommonDivisor);
  while (num1 === answer) {
    answer = getNumber(minCommonDivisor);
  }
  return answer;
};

const getNumbers = () => {
  const ranMinCommonDivisor = getRandomInt(2, maxRanMinCommonDivisor);
  const num1 = getNumber(ranMinCommonDivisor);
  const num2 = number2(num1, ranMinCommonDivisor);
  return { num1, num2 };
};

const getQuestion = () => {
  const { num1, num2 } = getNumbers();
  const minNumber = num1 < num2 ? num1 : num2;
  let divisor = minNumber;
  while (divisor > 2) {
    if ((isInt(num1, divisor) === true) && (isInt(num2, divisor) === true)) {
      break;
    }
    divisor -= 1;
  }
  const question = `${num1} ${num2}`;
  const answer = String(divisor);
  return { question, answer };
};

export default () => game({ task, getQuestion });
