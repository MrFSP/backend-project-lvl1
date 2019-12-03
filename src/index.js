import readlineSync from 'readline-sync';
import brainEven from './games/braineven';
import brainCalc from './games/braincalc';


console.log('Welcome to the Brain Games!');

const name = () => readlineSync.question('\nMay I have your name? ');

const greeting = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      console.log('Answer "yes" if number even otherwise answer "no".');
      break;
    case 'brain calc':
      console.log('What is the result of the expression?');
      break;
    default:
  }
};

const game = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      return brainEven();
    case 'brain-calc':
      return brainCalc();
    default:
  }
};

const playGame = (gameName, rounds) => {
  for (let i = 1; i <= rounds; i += 1) {
    const correctAnswer = game(gameName);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }
  }
  return true;
};

export default function (gameName) {
  greeting(gameName);
  const userName = name();
  console.log(`Hello, ${userName}!\n`);
  switch (gameName) {
    case 'brain-games':
      break;
    default:
      if (playGame(gameName, 3)) {
        console.log(`Congratulations, ${userName}!\n`);
      } else {
        console.log(`Let's try again, ${userName}!\n`);
      }
  }
}
