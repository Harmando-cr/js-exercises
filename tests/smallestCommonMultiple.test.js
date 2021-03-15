const smallestCommons = require('../exercises/smallestCommonMultiple')

describe('smallest common multiple', () => {
    it('[1, 5]',() =>{
        expect(smallestCommons([1,5])).toBe(60)
    })
    
    it('[5, 1]',() =>{
        expect(smallestCommons([5,1])).toBe(60)
    })

    it('[2, 10]',() =>{
        expect(smallestCommons([2,10])).toBe(2520)
    })

    it('[1, 13]',() =>{
        expect(smallestCommons([1,13])).toBe(360360)
    })

    it('[23, 18]',() =>{
        expect(smallestCommons([23,18])).toBe(6056820)
    })
})