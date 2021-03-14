const sumFibs = require('../exercises/sumOddFibonacci')

describe('Sum all odd fibonnaci numbers', () => {
    it('10',() => {
        expect(sumFibs(10)).toBe(10)
    })

    it('1000',() => {
        expect(sumFibs(1000)).toBe(1785)
    })

    it('4000000',() => {
        expect(sumFibs(4000000)).toBe(4613732)
    })

    it('4',() => {
        expect(sumFibs(4)).toBe(5)
    })

    it('75024',() => {
        expect(sumFibs(75024)).toBe(60696)
    })

    it('75025',() => {
        expect(sumFibs(75025)).toBe(135721)
    })
})