import readlineSync from 'readline-sync';

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export default (task, correctAnswerFromGame) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(task);
  const userName = getName();
  let isResult;
  for (let i = 1; i <= 3; i += 1) {
    const correctAnswer = correctAnswerFromGame();
    const userAnswer = readlineSync.question('Your answer: ');
    isResult = userAnswer === correctAnswer;
    if (isResult) {
      console.log('Correct!\n');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
  }
  if (isResult) {
    console.log(`Congratulations, ${userName}!\n`);
  } else {
    console.log(`Let's try again, ${userName}!\n`);
  }
};
