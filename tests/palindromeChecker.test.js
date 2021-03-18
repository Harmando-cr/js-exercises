const palindrome = require('../exercises/palindromeChecker')

describe('is Palindrome', ()=>{
    it('eye',() => {
        expect(palindrome('eye')).toBe(true)
    })

    it('_eye',() => {
        expect(palindrome('_eye')).toBe(true)
    })

    it('race car',() => {
        expect(palindrome('race car')).toBe(true)
    })

    it('not a palindrome',() => {
        expect(palindrome('not a palindrome')).toBe(false)
    })

    it('A man, a plan, a canal. Panama',() => {
        expect(palindrome('A man, a plan, a canal. Panama')).toBe(true)
    })

    it('never odd or even',() => {
        expect(palindrome('never odd or even')).toBe(true)
    })

    it('nope',() => {
        expect(palindrome('nope')).toBe(false)
    })

    it('almostomla',() => {
        expect(palindrome('almostomla')).toBe(false)
    })

    it('My age is 0, 0 si ega ym.',() => {
        expect(palindrome('My age is 0, 0 si ega ym.')).toBe(true)
    })

    it('1 eye for of 1 eye.',() => {
        expect(palindrome('1 eye for of 1 eye.')).toBe(false)
    })

    it('0_0 (: /-\ :) 0-0',() => {
        expect(palindrome('0_0 (: /-\ :) 0-0')).toBe(true)
    })

    it('five|\_/|four',() => {
        expect(palindrome('five|\_/|four')).toBe(false)
    })
})