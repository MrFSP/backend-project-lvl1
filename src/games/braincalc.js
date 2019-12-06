import { getRandomInt } from './functions';

export default () => {
  const getTypeOfGame = getRandomInt(1, 3);
  let answer = 0;
  const number1 = getRandomInt(0, 100);
  const number2 = getTypeOfGame === 3 ? getRandomInt(0, 10) : getRandomInt(0, 100);

  switch (getTypeOfGame) {
    case 1:
      console.log(`Question: ${number1} + ${number2}`);
      answer = number1 + number2;
      break;
    case 2:
      console.log(`Question: ${number1} - ${number2}`);
      answer = number1 - number2;
      break;
    case 3:
      console.log(`Question: ${number1} * ${number2}`);
      answer = number1 * number2;
      break;
    default:
  }
  return String(answer);
};
