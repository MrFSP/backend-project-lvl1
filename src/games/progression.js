import { getRandomInt } from '../utils/functions';

import game from '..';

// Arithmetic progression

const minStepOfArithmeticProgr = 1;
const maxStepOfArithmeticProgr = 9;
const arithmeticProgressionLength = 10;
const maxFirstMemberOfArithmeticProgr = 9;

export const task = 'What number is missing in the progression?';

const getData = () => {
  const step = getRandomInt(minStepOfArithmeticProgr, maxStepOfArithmeticProgr);
  const indexOfHiddenNumber = getRandomInt(0, arithmeticProgressionLength - 1);
  const firstMember = getRandomInt(1, maxFirstMemberOfArithmeticProgr);
  const answer = String(firstMember + (indexOfHiddenNumber * step));
  let question = '';
  for (let i = 0; i < arithmeticProgressionLength; i += 1) {
    const currentMember = firstMember + (i * step);
    if (i !== indexOfHiddenNumber) {
      question = `${question}${currentMember} `;
    } else {
      question = `${question}.. `;
    }
  }
  question = question.trim();
  return { question, answer };
};

export default () => game(task, getData);
