import readlineSync from 'readline-sync';
import playBrainEven from './games/braineven';
import playBrainCalc from './games/braincalc';
import playBrainGCD from './games/braingcd';
import playBrainProgression from './games/brainprogression';
import playBrainPrime from './games/brainprime';

const numberOfRounds = 3; // Number of rounds of game

const getName = () => readlineSync.question('\nMay I have your name? ');

const showGreeting = (gameName) => {
  console.log('\nWelcome to the Brain Games!');
  switch (gameName) {
    case 'brain-even':
      console.log('Answer "yes" if number even otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'brain-progression':
      console.log('What number is missing in the progression?');
      break;
    case 'brain-prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
  }
};

const selectTypeOfGame = (gameName) => {
  let answer;
  // eslint-disable-next-line default-case
  switch (gameName) {
    case 'brain-even':
      answer = playBrainEven();
      break;
    case 'brain-calc':
      answer = playBrainCalc();
      break;
    case 'brain-gcd':
      answer = playBrainGCD();
      break;
    case 'brain-progression':
      answer = playBrainProgression();
      break;
    case 'brain-prime':
      answer = playBrainPrime();
      break;
  }
  return answer;
};

const playGame = (gameName, rounds) => {
  for (let i = 1; i <= rounds; i += 1) {
    const correctAnswer = selectTypeOfGame(gameName);
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
  showGreeting(gameName);
  const userName = getName();
  console.log(`Hello, ${userName}!\n`);
  switch (gameName) {
    case 'brain-games':
      break;
    default:
      if (playGame(gameName, numberOfRounds)) {
        console.log(`Congratulations, ${userName}!\n`);
      } else {
        console.log(`Let's try again, ${userName}!\n`);
      }
  }
}
