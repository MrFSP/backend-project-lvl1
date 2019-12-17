import { getRandomInt } from '../other/functions';

import game from '..';

const task = 'What is the result of the expression?\n';

const getQuestion = () => {
  const num1 = getRandomInt(0, 10);
  const num2 = getRandomInt(0, 10);
  const operation = getRandomInt(0, 2);
  const expression = (x, y, operator) => {
    switch (operator) {
      case 0: return ['*', x * y];
      case 1: return ['+', x + y];
      default: return ['-', x - y];
    }
  };
  const [operator, result] = expression(num1, num2, operation);
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(result);
  return { question, answer };
};

export default () => game({ task, getQuestion });
