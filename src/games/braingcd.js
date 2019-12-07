import { getRandomInt, isInt } from './functions';

const highBorderOfNumbers = 100; // High border of numbers
const maxRanMinCommonDivisor = 20; // Max number of random min common divisor

const number = (MinCommonDivisor) => {
  let result;
  while (result % MinCommonDivisor !== 0) {
    result = getRandomInt(2, highBorderOfNumbers);
  }
  return result;
};

export default () => {
  const ranMinCommonDivisor = getRandomInt(2, maxRanMinCommonDivisor);
  const number1 = number(ranMinCommonDivisor);
  const num2 = () => {
    let answer = number(ranMinCommonDivisor);
    while (number1 === answer) {
      answer = number(ranMinCommonDivisor);
    }
    return answer;
  };
  const number2 = num2();
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
