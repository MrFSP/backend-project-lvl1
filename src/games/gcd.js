import { getRandomInt, isInt } from '../functionmodules/functions';

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

const num2 = (num1, minCommonDivisor) => {
  let answer = getNumber(minCommonDivisor);
  while (num1 === answer) {
    answer = getNumber(minCommonDivisor);
  }
  return answer;
};

const getQuestion = () => {
  const ranMinCommonDivisor = getRandomInt(2, maxRanMinCommonDivisor);
  const number1 = getNumber(ranMinCommonDivisor);
  const number2 = num2(number1, ranMinCommonDivisor);
  const question = `${number1} ${number2}`;

  const gcd = (n1, n2) => {
    const minNumber = n1 < n2 ? n1 : n2;
    let divisor = minNumber;
    while (divisor > 2) {
      if ((isInt(n1, divisor) === true) && (isInt(n2, divisor) === true)) {
        break;
      }
      divisor -= 1;
    }
    return String(divisor);
  };
  const answer = gcd(number1, number2);
  return { question, answer };
};

export default () => game({ task, getQuestion });
