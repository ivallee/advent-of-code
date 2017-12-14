const input = 312051;
 
let i = 0;
let ring = 0;
let sum = 1;
let lenghtOfSide = 0;
let lengthOfRing = 0;
 
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
 
let count = 0;
while(sum != input){
   
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