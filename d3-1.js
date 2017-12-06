function spiral(n) {

  let x = 0;
  let y = 0;
  let direction = 'EAST';
  let square = 3;
  let gridWidth = Math.pow(square, 2) / square;
  const cycles = Math.floor((Math.sqrt(n + 1) - 1) / 2) + 1;


console.log('Spiral Cycles :', cycles);
console.log('grid width: ', gridWidth)

}

spiral(400);

// 