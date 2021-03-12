// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str){
    const consonantsRegex = /^[b-df-hj-np-tv-z]+/g // Regular expression to match first consonant in a word
    const clusterConsonant = str.match(consonantsRegex)
    const baseWord = clusterConsonant ? str.slice(clusterConsonant[0].length) : str
  
    if (clusterConsonant){
        return baseWord + clusterConsonant + 'ay'
    }

    return baseWord + 'way'
}
module.exports = translatePigLatin


