import { getRandomInt } from './functions';

export default () => {
  const getTypeOfOperator = getRandomInt(1, 3);
  let answer = 0;
  const firstMember = getRandomInt(0, 100); // First member for all expressions
  // eslint-disable-next-line max-len
  const secondMember = getRandomInt(0, 100); // Second member for all expressions (except multiplication)
  const multiplier = getRandomInt(0, 10); // Second member for multiplication

  switch (getTypeOfOperator) {
    case 1:
      console.log(`Question: ${firstMember} + ${secondMember}`);
      answer = firstMember + secondMember;
      break;
    case 2:
      console.log(`Question: ${firstMember} - ${secondMember}`);
      answer = firstMember - secondMember;
      break;
    case 3:
      console.log(`Question: ${firstMember} * ${multiplier}`);
      answer = firstMember * multiplier;
      break;
    default:
  }
  return String(answer);
};
