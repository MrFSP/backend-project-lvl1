import getRandomInt from './functions';

export default () => {
  const getTypeOfGame = getRandomInt(1, 3);
  let answer = 0;
  const number1 = getRandomInt(0, 100);
  let number2 = getRandomInt(0, 100);
  if (getTypeOfGame === 3) {
    number2 = getRandomInt(0, 10);
  }
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
