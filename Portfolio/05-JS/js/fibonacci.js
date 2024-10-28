/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};

function fibonacci() {
  "use strict";
  var n = document.getElementById("num").value;
  var val = f(n);
  document.getElementById("fibonacciLbl").innerHTML=val;
}

function f(n) {
  var value;
  if (n==0){
    return 0;
  }
  if (n==1){
    return 1;
  }
  // Check if the memory array already contains the requested number
  if (memo.hasOwnProperty(n)) {
    value = memo[n];
  } else {
    //TODO: Implement the fibonacci function here!
    value=f(n-1)+f(n-2);
    console.log(value);
    memo[n] = value;
  }
  return value;
}
console.log(fibonacci(15));
