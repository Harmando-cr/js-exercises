
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    for (let i=0; i< str.length; i++){
        const charCode = str.charCodeAt(i)
        
        if (charCode !== str.charCodeAt(0) + i) {
            return String.fromCharCode(charCode - 1)
        }
    }

    return undefined
}

  module.exports = fearNotLetter