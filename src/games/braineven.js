import { getRandomInt } from './functions';

const maxNumber = 100;

export default () => {
  const getNumber = getRandomInt(0, maxNumber);
  console.log(`Question: ${getNumber}`);
  return getNumber % 2 === 0 ? 'yes' : 'no';
};
