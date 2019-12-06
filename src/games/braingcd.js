import { getRandomInt, isInt } from './functions';

const highBorderOfNumbers = 100; // High border of numbers
const maxOfRanMinCommonDivisor = 20; // Max number of random min common divisor
const ranMinCommonDivisor = getRandomInt(2, maxOfRanMinCommonDivisor); // Random min common divisor

const number = () => {
  let result;
  while (result % ranMinCommonDivisor !== 0) {
    result = getRandomInt(2, highBorderOfNumbers);
  }
  return result;
};

export default () => {
  const number1 = number();
  const num2 = () => {
    let answer;
    while (number1 === answer) {
      answer = number();
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
