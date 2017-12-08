// // locations
// const loc = {
//   x: 0,
//   y: 0,
//   direction: 'EAST'
// }


// // movement
// let steps = 1;
// let side = 0;

// const turn = (sideLength) => {
//   if (side === 0 ) {
//     sideLength = 1;
//   }
//   switch(loc.direction) {
//    case('NORTH'):
//     loc.y += sideLength;
//     steps += sideLength;
//     loc.direction = 'WEST';
//     break;
//   case('WEST'):
//     loc.x -= sideLength;
//     steps += sideLength;
//     loc.direction = 'SOUTH';
//     break;
//   case('SOUTH'):
//     loc.y -= sideLength;
//     steps += sideLength;
//     loc.direction = 'EAST';
//     break;
//   case('EAST'):
//     loc.x += sideLength;
//     steps += sideLength;
//     loc.direction = 'NORTH';
//     break;
//   default:
//     break;
//   }
// };

// const move = (place) => {
//   while (place > steps) {
//     turn(side);
//     // steps += side;
//     console.log(loc)
//     turn(side);
//     // steps += side;
//     side++;
//     console.log(steps)
//     console.log(loc)
//     console.log('side', side)
//   }
// };

// move(9);

// function spiral(n) {

//   let x = 0;
//   let y = 0;
//   let direction = 'EAST';
//   let square = 1;
//   let gridWidth = Math.pow(square, 2) / square;
//   const cycles = Math.floor((Math.sqrt(n + 1) - 1) / 2) + 1;


// console.log('Spiral Cycles :', cycles);
// console.log('grid width: ', gridWidth)

// }

// spiral(400);

// if total number is equal to grid width
  // make a new row and turn


// PATTERN
// move once
// move, turn, move, turn
//


   
const input = 312051;
 
let i = 0;
let ring = 0;
let sum = 1;
let lenghtOfSide = 0;
let lengthOfRing = 0;
 
//find the correct ring the number is one
while(sum < input){
    ring++;
    i++;
    sum = sum + 8 * ring;
    lengthOfRing = 8 * ring;
    lenghtOfSide = (lengthOfRing + 4 ) / 4;    
}
 
 
let coordinates = {
    x: ring,
    y: -ring,
}
 
//find the position of the ring the number is one
let count = 0;
while(sum != input){
    //console.log(coordinates, count,lenghtOfSide,sum );
   
    if(count < lenghtOfSide-1)
        coordinates.x--;
    else if(count < lenghtOfSide*2-2)
        coordinates.y++;
    else if(count < lenghtOfSide*3-3)
        coordinates.x++;
    else if(count < lenghtOfSide*4-4)
        coordinates.y--;
    sum--;
    count++;
}
 
console.log(coordinates);
 
const result = Math.abs(coordinates.x) + Math.abs(coordinates.y);//calculate manhattan distance
 
console.log(result);