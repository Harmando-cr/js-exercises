const sumPrimes = require('../exercises/sumPrimes')

describe('sum all primes', () => {

    it('10', () => {
        expect(sumPrimes(10)).toBe(17)
    })

    it('977', () => {
        expect(sumPrimes(977)).toBe(73156)
    })
})