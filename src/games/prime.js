import { getRandomInt } from '../gamemodules/functions';

import game from '..';

const maxNum = 100; // High border of numbers

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isSimpleNumber = (number) => {
  let answer = true;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      answer = false;
      break;
    }
  }
  return answer;
};
// Get random simple number on the segment [2, max]
const getRanSimpleNum = (max) => {
  let answer = getRandomInt(3, max);
  while (isSimpleNumber(answer) === true) {
    answer = getRandomInt(3, max);
  }
  return answer;
};

// Get random composite number on the segment [2, max]
const getRanCompNum = (max) => {
  let answer = getRandomInt(2, max);
  while (isSimpleNumber(answer) !== true) {
    answer = getRandomInt(2, max);
  }
  return answer;
};

const prime = () => {
  const isSimpleForGame = getRandomInt(0, 1) === 1;
  const question = isSimpleForGame ? getRanSimpleNum(maxNum) : getRanCompNum(maxNum);
  console.log(`Question: ${question}`);
  return isSimpleNumber(question) === true ? 'yes' : 'no';
};

export default () => game(task, prime);
