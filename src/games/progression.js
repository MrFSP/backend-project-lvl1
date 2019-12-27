import { getRandomInt } from '../utils/functions';

import game from '..';

// Arithmetic progression

const minStepOfProgr = 1; // Min step of Arithmetic progression
const maxStepOfProgr = 9; // Max step of Arithmetic progression
const progressionLength = 10; // Number of members of Arithmetic progression
const maxFirstMemberOfProgr = 9; // Max first member of Arithmetic progression

export const task = 'What number is missing in the progression?';

const arProgression = () => {
  const step = getRandomInt(minStepOfProgr, maxStepOfProgr);
  const indexOfHiddenNumber = getRandomInt(0, progressionLength - 1);
  const firstMember = getRandomInt(1, maxFirstMemberOfProgr);
  let answer;
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const currentMember = firstMember + (i * step);
    if (i !== indexOfHiddenNumber) {
      progression = `${progression}${currentMember} `;
    } else {
      answer = String(currentMember);
      progression = `${progression}.. `;
    }
  }
  const question = progression.trim();
  return { question, answer };
};

export default () => game(task, arProgression);
