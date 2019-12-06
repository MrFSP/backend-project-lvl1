import { getRandomInt } from './functions';

// Arithmetic progression


const minStepOfProgr = 1; // Min step of Arithmetic progression
const maxStepOfProgr = 9; // Max step of Arithmetic progression
const numderOfMembers = 10; // Number of members of Arithmetic progression
const maxFirstMemberOfProgr = 9; // Max first member of Arithmetic progression

export default () => {
  const arithmeticProgression = () => {
    const stepOfProgr = getRandomInt(minStepOfProgr, maxStepOfProgr);
    const indexOfHiddenNumber = getRandomInt(1, numderOfMembers);
    let numOfProgr = getRandomInt(1, maxFirstMemberOfProgr);
    let answer;
    let question = 'Question: ';
    for (let i = 1; i <= numderOfMembers; i += 1) {
      if (i !== indexOfHiddenNumber) {
        question += `${numOfProgr} `;
      } else {
        answer = numOfProgr;
        question += '.. ';
      }
      numOfProgr += stepOfProgr;
    }
    console.log(question);
    return answer;
  };
  return String(arithmeticProgression());
};
