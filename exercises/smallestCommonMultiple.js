// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 
// that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
    const [min, max] = arr.sort((a,b) => a - b)
    const range = Array(max-min+1).fill().map((_, i) => i + min);
    const mcm = range.reduce((acc,elm) => acc * elm, 1)

    for (let i = max; i <= mcm; i += max) {
        const divisibleByAll = range.every(elm => i % elm === 0)
        if (divisibleByAll) {
            return i
        }
    }
    
    return arr;
}

module.exports = smallestCommons
