#!/usr/bin/env node

import { name } from '..';

console.log('Welcome to the Brain Games!\n');

const userName = name();

console.log(`Hello, ${userName}!`);