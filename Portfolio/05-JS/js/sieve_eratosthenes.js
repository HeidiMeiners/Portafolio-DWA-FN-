/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

// TODO: Adjust this script so it can work with the sieve.html file.

function sieve() {
  "use strict";
  var n=parseInt(document.getElementById("num").value, 10);

  var array = new Array(n + 1).fill(true); 
  var primes = [];
  array[0] = array[1] = false; 

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (array[i]) { 
      for (var j = i * i; j <= n; j += i) { 
        array[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (array[i]) {
      primes.push(i);
    }
  }

  document.getElementById("primes").innerHTML=primes.join(" , ");
};


console.log(sieve(1000000));
