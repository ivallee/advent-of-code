const fs = require("fs");
const input = fs.readFileSync("./d9-input.txt").toString('utf-8');

const testData = '{{<!>},{<!>},{<!>},{<a>}}';


const solve = (str) => {
  let depth = 0;
  let score = 0;
  let isGarbage = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{' && !isGarbage) {
      depth++;
    }
    if (str[i] === '}' && !isGarbage) {
      score += depth;
      depth--;
    }
    if (str[i] === '<') {
      isGarbage = true;
    }
    if (str[i] === '>') {
      isGarbage = false;
    }
    if (str[i] === '!') {
      i++
    }
  }
  return score;
};

console.log(solve(input));