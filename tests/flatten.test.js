const flatArray = require('../exercises/flatten')

describe('flatten',() => {
    it('[[["a"]], [["b"]]]',() => {
        expect(flatArray([[["a"]], [["b"]]])).toEqual(["a", "b"])
    })

    it('[1, [2], [3, [[4]]]]',() => {
        expect(flatArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4])
    })

    it('[1, [], [3, [[4]]]]',() => {
        expect(flatArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4])
    })

    it('[1, {}, [3, [[4]]]]',() => {
        expect(flatArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4])
    })
})