import { getRandomInt } from '../other/functions';

import game from '..';

const maxNumber = 100;

const task = 'Answer "yes" if number even otherwise answer "no".\n';

const getQuestion = () => {
  const number = getRandomInt(0, maxNumber);
  const question = String(number);
  const isEven = number % 2 === 0;
  const answer = isEven ? 'yes' : 'no';
  return { question, answer };
};

export default () => game({ task, getQuestion });
