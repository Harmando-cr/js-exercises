// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. 
//For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


function myReplace(str, before, after) {
    const afterCased = /[A-Z]/.test(before) 
        ? after.charAt(0).toUpperCase() + after.slice(1) : after.charAt(0).toLowerCase() + after.slice(1)
    const position = str.split(' ').indexOf(before)
    const newStr = str.split(' ')
    
    newStr.splice(position, 1, afterCased)
    newStr.join(' ')
    
    return newStr.join(' ');
    }

module.exports = myReplace