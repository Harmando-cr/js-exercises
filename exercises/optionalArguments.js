// Create a function that sums two arguments together. 
// If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether() {
    const [one, two] = [arguments[0], arguments[1]]
  
    if (typeof one !== "number") {
      return undefined;
    }
  
  
    function addSecond(two) {
      if(typeof two === "number"){
        return one + two
      }
  
      return undefined
    }  
  
    if (two !== undefined) {
      return addSecond(two);
    } else {
      return addSecond
    }
  }

  module.exports = addTogether