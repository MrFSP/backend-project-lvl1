import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!\n';

const name = () => readlineSync.question('May I have your name? ');

const helloUser = (userName) => console.log(`Hello, ${userName}!\n`);

// Random number
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const makeNumber = () => {
  const number = getRandomInt(0, 100);
  console.log(`Question: ${number}`);
  return number % 2 === 0 ? 'yes' : 'no';
};

export const brainEven = () => {
  console.log(`${greeting}Answer "yes" if number even otherwise answer "no".\n`);
  const userName = name();
  helloUser(userName);
  for (let i = 0; i <= 3; i += 1) {
    if (i === 3) {
      console.log(`Congratulations, ${userName}!\n`);
      break;
    }
    const correctAnswer = makeNumber();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!\n`);
      break;
    }
  }
};

export const brainGames = () => {
  console.log(greeting);
  const userName = name();
  helloUser(userName);
};
