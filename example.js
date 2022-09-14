const { createInterface } = require("readline");

let rl = createInterface({ input: process.stdin, output: process.stdout });

rl.question("Welcome to Node.js. What is your name?\t", (name) => {
  console.log(`\n>\tHello ${name}! Let's get started.`);
  rl.close();
});
