import { getRandomInt } from '../utils/functions';

import game from '..';

// Arithmetic progression

const minStepOfProgr = 1; // Min step of Arithmetic progression
const maxStepOfProgr = 9; // Max step of Arithmetic progression
const numderOfMembers = 10; // Number of members of Arithmetic progression
const maxFirstMemberOfProgr = 9; // Max first member of Arithmetic progression

export const task = 'What number is missing in the progression?\n';

const getQuestion = () => {
  const getStepOfProgr = getRandomInt(minStepOfProgr, maxStepOfProgr);
  const getIndexOfHiddenNumber = getRandomInt(1, numderOfMembers);
  let nextNumOfProgr = getRandomInt(1, maxFirstMemberOfProgr);
  let answer;
  let progression = '';
  for (let i = 1; i <= numderOfMembers; i += 1) {
    if (i !== getIndexOfHiddenNumber) {
      progression += `${nextNumOfProgr} `;
    } else {
      answer = String(nextNumOfProgr);
      progression += '.. ';
    }
    nextNumOfProgr += getStepOfProgr;
  }
  const question = progression;
  return { question, answer };
};

export default () => game({ task, getQuestion });
