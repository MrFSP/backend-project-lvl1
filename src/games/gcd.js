import { getRandomInt, isInt } from '../gamemodules/functions';

import game from '..';

const highBorderOfNumbers = 100; // High border of numbers
const maxRanMinCommonDivisor = 20; // Max number of random min common divisor
export const task = 'Find the greatest common divisor of given numbers.\n';

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

const gcd = () => {
  const ranMinCommonDivisor = getRandomInt(2, maxRanMinCommonDivisor);
  const number1 = getNumber(ranMinCommonDivisor);
  const number2 = num2(number1, ranMinCommonDivisor);
  console.log(`Question: ${number1} ${number2}`);
  const minNumber = number1 < number2 ? number1 : number2;
  let divisor = minNumber;
  while (divisor > 2) {
    if ((isInt(number1, divisor) === true) && (isInt(number2, divisor) === true)) {
      break;
    }
    divisor -= 1;
  }
  return String(divisor);
};

export default () => game(task, gcd);
