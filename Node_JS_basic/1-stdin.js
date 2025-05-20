#!/usr/bin/node

// Import the 'process' module to interact with the standard input
const process = require('process');

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listen for data from stdin
process.stdin.on('data', (data) => {
  // Convert the input buffer to a string and remove the trailing newline
  const name = data.toString().trim();
  
  // Display the name
  console.log(`Your name is: ${name}`);
  
  // End the program
  process.stdin.pause();
});

// Listen for the end of the program
process.on('exit', () => {
  console.log('This important software is now closing');
});
