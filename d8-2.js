const fs = require("fs");
const input = fs.readFileSync("./d8-input.txt").toString('utf-8').split("\n");

const testInput = [
  'b inc 5 if a > 1',
  'a inc 1 if b < 5',
  'c dec -10 if a >= 1',
  'c inc -20 if c == 10',
]



const solve = (arr) => {
  const registers = {};
  let highestValue = 0;

  for (let i = 0; i < arr.length; ++i) {
    const instruction = arr[i].split(" ");
    const registerA = instruction[0];
    const registerB = instruction[4];
    const direction = instruction[1] == 'inc' ? '+' : '-';
    const operator = instruction[5];
    const compareTo = instruction[6];
    const change = parseInt(instruction[2]);
    if (!registers.hasOwnProperty(registerA)) {
      registers[registerA] = 0;
    }
    if (!registers.hasOwnProperty(registerB)) {
      registers[registerB] = 0;
    }
    if (eval(registers[registerB] + operator + compareTo)) {
      registers[registerA] = eval(registers[registerA] + direction + " " + (change));
    }
    const objArr = Object.keys(registers).map(key =>  registers[key])
    const highest = Math.max(...objArr);
    if (highest > highestValue) {
      highestValue = highest
    }
  }
  return highestValue;
};

console.log(solve(input));