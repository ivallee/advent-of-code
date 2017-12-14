const fs = require("fs");
const input = fs.readFileSync("./d9-input.txt").toString('utf-8');

const testData = '<{o"i!a,<{i<a>';


const solve = (str) => {
  let depth = 0;
  let score = 0;
  let isGarbage = false;
  let garbageCount = 0;
  for (let i = 0; i < str.length; i++) {
    // if (str[i] === '{' && !isGarbage) {
      //   depth++;
      // }
      // if (str[i] === '}' && !isGarbage) {
        //   score += depth;
        //   depth--;
        // }
        if (str[i] === '<' && !isGarbage) {
          i++
          isGarbage = true;
          
        }
        if (str[i] === '>') {
          isGarbage = false;
        }
        if (isGarbage && str[i] !== '!') {
          garbageCount++;
        }
        if (str[i] === '!') {
      i++
    }
      }
  return garbageCount;
};

console.log(solve(input));