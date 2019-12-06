// Get random number on the segment [min, max]
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isInt = (n1, n2) => Number.isInteger(n1 / n2);

export const isSimpleNumber = (number) => {
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
export const getRanSimpleNum = (max) => {
  let answer = getRandomInt(3, max);
  while (isSimpleNumber(answer) === true) {
    answer = getRandomInt(3, max);
  }
  return answer;
};

// Get random composite number on the segment [2, max]
export const getRanCompNum = (max) => {
  let answer = getRandomInt(2, max);
  while (isSimpleNumber(answer) !== true) {
    answer = getRandomInt(2, max);
  }
  return answer;
};
