// Get random number on the segment [min, max]
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isInt = (n1, n2) => Number.isInteger(n1 / n2);
