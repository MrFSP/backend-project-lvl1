import { getRandomInt, isInt } from './functions';

export default () => {
  const minCommonDivisor = getRandomInt(2, 20);

  const number = () => {
    let result;
    while (result % minCommonDivisor !== 0) {
      result = getRandomInt(2, 100);
    }
    return result;
  };
  let number1;
  let number2;
  while (number1 === number2) {
    number1 = number();
    number2 = number();
  }
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
