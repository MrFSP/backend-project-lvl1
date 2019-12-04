import getRandomInt from './functions';

const isInt = (n1, n2) => Number.isInteger(n1 / n2);

export default () => {
  const minCommonDivisor = getRandomInt(2, 30);

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
  console.log(isInt(number1, divisor));
  console.log(isInt(number2, divisor));
  while (divisor > 2) {
    const num1 = number1;
    const num2 = number2;
    if ((isInt(num1, divisor) === true) && (isInt(num2, divisor) === true)) {
      break;
    }
    divisor -= 1;
  }
  console.log(divisor);
  return String(divisor);
};
