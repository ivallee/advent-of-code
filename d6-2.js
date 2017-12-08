const input = [10, 3, 15, 10, 5, 15, 5, 15, 9, 2, 5, 8, 5, 2, 3, 6];

const seenBefore = new Set();
let last = input;

while (!seenBefore.has(input.join(','))) {
  seenBefore.add(input.join(','));
  last = input;
  
  let max = Math.max(...input)
  let maxIndex = input.indexOf(max)
  input[maxIndex] = 0
  for(let i = 1; i <= max; i++) {
    input[(maxIndex + i) % input.length]++
  }
}

const seenAgain = new Set();

console.log(last);

while (!seenAgain.has(last.join(','))) {
  seenAgain.add(last.join(','))
  
  let max = Math.max(...last)
  let maxIndex = last.indexOf(max)
  last[maxIndex] = 0
  for(let i = 1; i <= max; i++) {
    last[(maxIndex + i) % last.length]++
  }
}

console.log(seenAgain.size)