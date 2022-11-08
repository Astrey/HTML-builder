const fs = require('fs');
const readline = require('readline');
const path = require('path');
const writeStream = fs.createWriteStream(path.join(__dirname, "output.txt"));

const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: 'next line: ' });

console.log('Hello!');

rl.addListener('SIGINT', () => {
    rl.close();
    return;
  });

rl.addListener('line', (answer) => {
    if (answer === 'exit') {
        rl.close();
        return;
      }
    writeStream.write(answer + '\n');
    console.log(
      `write to file: ${answer}`
    );
    rl.prompt();
    //rl.close();
  });
