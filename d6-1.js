const input = [10, 3, 15, 10, 5, 15, 5, 15, 9, 2, 5, 8, 5, 2, 3, 6];

const seenBefore = new Set();


while (!seenBefore.has(input.join(','))) {
  seenBefore.add(input.join(','))
  let max = Math.max(...input)
  let maxIndex = input.indexOf(max)
  input[maxIndex] = 0
  for(let i = 1; i <= max; i++) {
    input[(maxIndex + i) % input.length]++
  }
}

console.log(seenBefore.size)