import { getRandomInt } from '../utils/functions';

import game from '..';

const task = 'What is the result of the expression?';

const operators = '+-*';

const expression = (x, y, operator) => {
  switch (operator) {
    case '*': return [x * y];
    case '+': return [x + y];
    case '-': return [x - y];
    default: return null;
  }
};

const getQuestion = () => {
  const num1 = getRandomInt(0, 10);
  const num2 = getRandomInt(0, 10);
  const operation = operators.charAt(getRandomInt(0, operators.length - 1));
  const result = expression(num1, num2, operation);
  const question = `${num1} ${operation} ${num2}`;
  const answer = String(result);
  return { question, answer };
};

export default () => game(task, getQuestion);
