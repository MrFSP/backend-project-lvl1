import { getRandomInt } from './functions';

export default () => {
  const number = getRandomInt(0, 100);
  console.log(`Question: ${number}`);
  return number % 2 === 0 ? 'yes' : 'no';
};
