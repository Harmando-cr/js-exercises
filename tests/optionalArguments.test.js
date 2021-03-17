const addTogether = require('../exercises/optionalArguments')

describe('optional arguments', () => {
    it("2, 3", () => {
        expect(addTogether(2, 3)).toBe(5)
    })

    it('23, 30', () => {
        expect(addTogether(23, 30)).toBe(53)
    })

    it("(5)(7)", () => {
        expect(addTogether(5)(7)).toBe(12)
    })

    it('url', () => {
        expect(addTogether("http://bit.ly/IqT6zt")).toBe(undefined)
    })

    it('2, "3"', () => {
        expect(addTogether(2, "3")).toBe(undefined)
    })

    it('(2)([3])', () => {
        expect(addTogether(2)([3])).toBe(undefined)
    })
})