import {
  isSimpleNumber, getRandomInt, getRanSimpleNum, getRanCompNum,
} from './functions';

const maxNum = 100; // High border of numbers

export default () => {
  const isSimpleForGame = getRandomInt(0, 1) === 1;
  const question = isSimpleForGame ? getRanSimpleNum(maxNum) : getRanCompNum(maxNum);
  console.log(`Question: ${question}`);
  return isSimpleNumber(question) === true ? 'yes' : 'no';
};
