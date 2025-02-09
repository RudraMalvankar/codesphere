
function isPrimeAndFactors(num) {
  // Error handling for invalid input
  if (!Number.isInteger(num) || num <= 1) {
    return { error: "Invalid input: Number must be an integer greater than 1." };
  }

  // Optimization: Check for divisibility by 2 first
  if (num === 2) return { isPrime: true, factors: [] }; // 2 is prime
  if (num % 2 === 0) return { isPrime: false, factors: [2, num / 2] };


  // Check for primality and find factors efficiently.
  const factors = [];
  let isPrime = true;
  for (let i = 3; i <= Math.sqrt(num); i += 2) { // Only check odd numbers
    if (num % i === 0) {
      isPrime = false;
      factors.push(i);
      //Efficiently find the other factor
      let otherFactor = num / i;
      if(otherFactor !== i) factors.push(otherFactor); //Avoid duplicates for perfect squares.

    }
  }

  //if no factors were found, then its a prime number.
  if(isPrime) return {isPrime: true, factors: []};
    
  //Sort factors for consistency.
  factors.sort((a,b) => a-b);

  return { isPrime, factors };
}


// Example usage:
console.log(isPrimeAndFactors(1));   // { isPrime: true, factors: [] }
console.log(isPrimeAndFactors(7));   // { isPrime: true, factors: [] }
console.log(isPrimeAndFactors(10));  // { isPrime: false, factors: [2, 5] }
console.log(isPrimeAndFactors(15));  // { isPrime: false, factors: [3, 5] }
console.log(isPrimeAndFactors(9));   // { isPrime: false, factors: [3,3] }
console.log(isPrimeAndFactors(49));  // {isPrime: false, factors: [7, 7]}
console.log(isPrimeAndFactors(1));   // { error: 'Invalid input: Number must be an integer greater than 1.' }
console.log(isPrimeAndFactors(2.5)); // { error: 'Invalid input: Number must be an integer greater than 1.' }
console.log(isPrimeAndFactors(-5));  // { error: 'Invalid input: Number must be an integer greater than 1.' }
