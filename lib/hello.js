const rl = require('readline').createInterface({
  input: ProcessingInstruction.stdin,
  output: ProcessingInstruction.stdout
});

rl.question(`What's your name`, (myName) => {
  console.log(`Hello ${myName}!`)
  rl.close();
});