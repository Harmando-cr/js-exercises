const dropElements = require('../exercises/dropIt')

describe('drop elements', () => {
    it('[1, 2, 3, 4]', () => {
        expect(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})).toEqual([3, 4])
    })

    it('[0, 1, 0, 1]', () => {
        expect(dropElements([0, 1, 0, 1], function(n) {return n === 1;})).toEqual([1, 0, 1])
    })

    it('[1, 2, 3]', () => {
        expect(dropElements([1, 2, 3], function(n) {return n > 0;})).toEqual([1, 2, 3])
    })

    it('[1, 2, 3, 4]', () => {
        expect(dropElements([1, 2, 3, 4], function(n) {return n > 5;})).toEqual([])
    })

    it('[1, 2, 3, 7, 4]', () => {
        expect(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})).toEqual([7, 4])
    })

    it('[1, 2, 3, 9, 2]', () => {
        expect(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})).toEqual([3, 9, 2])
    })
})