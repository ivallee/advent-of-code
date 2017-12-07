const test = [0, 2, 7, 0];
const batches = [];

const redistribute = (arr) => {
  
  let max = Math.max(...arr);
  const maxIndex = arr.indexOf(max);
  arr[maxIndex] = 0;

  for (let i = maxIndex + 1; max > 0; i++) {
    max -= 1;
    arr[i] += 1;
    if  (i === arr.length) {
      i = 0;
    }
    return arr;
  }
};

batches.push(redistribute(test));
console.log(batches);