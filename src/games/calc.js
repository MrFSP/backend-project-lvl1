import { getRandomInt } from '../gamemodules/functions';

import game from '..';

const task = 'What is the result of the expression?\n';

const calc = () => {
  const getTypeOfOperator = getRandomInt(1, 3);
  let answer = 0;
  const getFirstMember = getRandomInt(0, 100); // First member for all expressions
  // eslint-disable-next-line max-len
  const getSecondMember = getRandomInt(0, 100); // Second member for all expressions (except multiplication)
  const getMultiplier = getRandomInt(0, 10); // Second member for multiplication

  switch (getTypeOfOperator) {
    case 1:
      console.log(`Question: ${getFirstMember} + ${getSecondMember}`);
      answer = getFirstMember + getSecondMember;
      break;
    case 2:
      console.log(`Question: ${getFirstMember} - ${getSecondMember}`);
      answer = getFirstMember - getSecondMember;
      break;
    case 3:
      console.log(`Question: ${getFirstMember} * ${getMultiplier}`);
      answer = getFirstMember * getMultiplier;
      break;
    default:
  }
  return String(answer);
};

export default () => game(task, calc);
