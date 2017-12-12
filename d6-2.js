const input = [10, 3, 15, 10, 5, 15, 5, 15, 9, 2, 5, 8, 5, 2, 3, 6];

const redistribute = (arr) => {
  const seen = new Set();
  while (!seen.has(input.join(','))) {
    seen.add(input.join(','))
    
    let max = Math.max(...input)
    let maxIndex = input.indexOf(max)
    input[maxIndex] = 0
    for(let i = 1; i <= max; i++) {
      input[(maxIndex + i) % input.length]++
    }
  }
  return seen.size;
};

console.log(redistribute(input));
console.log(redistribute(input));