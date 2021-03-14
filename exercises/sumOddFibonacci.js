// Given a positive integer num, return the sum of all odd Fibonacci numbers that
// are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. 
// Every additional number in the sequence is the sum of the two previous numbers. 
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers
// less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    const fibSequence = [0, 1]
    let sum = 0
    let oddFib = 0

    for (let i=0; oddFib <= num; i++){
      oddFib = fibSequence[1] % 2 ? fibSequence[1] : 0;
      sum = oddFib > num ? sum : sum + oddFib;
      [fibSequence[0],fibSequence[1]] = [fibSequence[1],fibSequence[0] + fibSequence[1]];
    }
  
    return sum;
  }

  module.exports = sumFibs