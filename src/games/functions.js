export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isInt = (n1, n2) => Number.isInteger(n1 / n2);

// Functions for 'braingcd.js' below

// const cons = (a, b) => (message) => {
//   // eslint-disable-next-line default-case
//   switch (message) {
//     case 'car':
//       return a;
//     case 'cdr':
//       return b;
//   }
// };

// const car = (pair) => pair('car');
// const cdr = (pair) => pair('cdr');

// export const pairOfNumForBrainGCD = () => {

// };
