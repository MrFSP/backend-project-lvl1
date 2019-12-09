import { getRandomInt } from './functions';

// Arithmetic progression

const minStepOfProgr = 1; // Min step of Arithmetic progression
const maxStepOfProgr = 9; // Max step of Arithmetic progression
const numderOfMembers = 10; // Number of members of Arithmetic progression
const maxFirstMemberOfProgr = 9; // Max first member of Arithmetic progression

const getArithmeticProgression = () => {
  const getStepOfProgr = getRandomInt(minStepOfProgr, maxStepOfProgr);
  const getIndexOfHiddenNumber = getRandomInt(1, numderOfMembers);
  let nextNumOfProgr = getRandomInt(1, maxFirstMemberOfProgr);
  let answer;
  let progression = 'Question: ';
  for (let i = 1; i <= numderOfMembers; i += 1) {
    if (i !== getIndexOfHiddenNumber) {
      progression += `${nextNumOfProgr} `;
    } else {
      answer = nextNumOfProgr;
      progression += '.. ';
    }
    nextNumOfProgr += getStepOfProgr;
  }
  console.log(progression);
  return answer;
};

export default () => String(getArithmeticProgression());
