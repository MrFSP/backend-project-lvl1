import { getRandomInt } from './functions';

const maxNumber = 100;

export default () => {
  const number = getRandomInt(0, maxNumber);
  console.log(`Question: ${number}`);
  return number % 2 === 0 ? 'yes' : 'no';
};
