import { getRandomInt } from '../gamemodules/functions';

import game from '..';

const maxNumber = 100;

const task = 'Answer "yes" if number even otherwise answer "no".\n';

const even = () => {
  const getNumber = getRandomInt(0, maxNumber);
  console.log(`Question: ${getNumber}`);
  return getNumber % 2 === 0 ? 'yes' : 'no';
};

export default () => game(task, even);
