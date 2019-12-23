import { getRandomInt } from '../utils/functions';

import game from '..';

// Arithmetic progression

const minStepOfProgr = 1; // Min step of Arithmetic progression
const maxStepOfProgr = 9; // Max step of Arithmetic progression
const progressionLength = 10; // Number of members of Arithmetic progression
const maxFirstMemberOfProgr = 9; // Max first member of Arithmetic progression

export const task = 'What number is missing in the progression?';

const getStepOfProgr = () => getRandomInt(minStepOfProgr, maxStepOfProgr);
const getIndexOfHiddenNumber = () => getRandomInt(0, progressionLength - 1);

const arProgression = () => {
  const stepOfProgr = getStepOfProgr();
  const indexOfHiddenNumber = getIndexOfHiddenNumber();
  const firstMemberOfProgr = getRandomInt(1, maxFirstMemberOfProgr);
  let answer;
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const currentMemberOfProgr = firstMemberOfProgr + (i * stepOfProgr);
    if (i !== indexOfHiddenNumber) {
      progression = `${progression}${currentMemberOfProgr} `;
    } else {
      answer = String(currentMemberOfProgr);
      progression = `${progression}.. `;
    }
  }
  const question = progression;
  return { question, answer };
};

export default () => game(task, arProgression);
