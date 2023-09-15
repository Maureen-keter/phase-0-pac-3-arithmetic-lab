//add two numbers
function add(a,b){
    return a+b;
}
console.log(1,2);
//subtracts two numbers
function subtract (a,b){
    return a-b;
}
console.log(3,7)
//multiplies two numbers
function multiply(a,b){
    return a*b;
}
console.log(3,8);

//divides two numbers
function divide(a,b){
    return a/b;
}
console.log(3,8)

//increments n and returns result
let n=2;
function increment(n){
    return n+1;
}
console.log(n);

//decrements n and returns result
function decrement(n){
    return n-1;
}
console.log(n);

//parse n and returns parsed number and returns NaN as appropriate
function makeInt(n) {
    const parsedInt = parseInt(n, 10);
  
    if (isNaN(parsedInt)) {
      return NaN;
    } else {
      return parsedInt;
    }
  }
  console.log(n);

  //preserveDecimal(n) returns NaN as appropriate:
  function preserveDecimal(n) {
    const parsedFloat = parseFloat(n);
    if (isNaN(parsedFloat)) {
        return NaN;
      } else {
        return parsedFloat;
      }
    }
    
    
    
    
    
    
    