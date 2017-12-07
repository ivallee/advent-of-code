const test = [0, 2, 7, 0];
let cycles = 0;
let last = [];
const batches = [];

const redistribute = (arr) => {
  
  let max = Math.max(...arr);
  const maxIndex = arr.indexOf(max);
  const output = [...arr];
  output[maxIndex] = 0;

  for (let i = maxIndex + 1; max > 0; i++) {
    if  (i === arr.length) {
      i = 0;
    }
    max -= 1;
    output[i] += 1;
  }
  return output;
};

const arraysEqual = (arr1, arr2) => {
  if(arr1.length !== arr2.length)
      return false;
  for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i])
          return false;
  }
  return true;
};

last = redistribute(test)
console.log(last)
batches.push(last)

prev = redistribute(last)
console.log(prev)
batches.push(prev)
console.log(batches);




// check if 'last' is same as any in array