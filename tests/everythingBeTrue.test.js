const truthCheck = require('../exercises/everythingBeTrue')

describe('everythingBeTrue', () => {
    it('1', () => {
        expect(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")).toBe(true)
    })

    it('2', () => {
        expect(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")).toBe(false)
    })

    it('3', () => {
        expect(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")).toBe(false)
    })

    it('4', () => {
        expect(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")).toBe(false)
    })

    it('5', () => {
        expect(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat")).toBe(true)
    })

    it('6', () => {
        expect(truthCheck([{"single": "yes"}], "single")).toBe(true)
    })

    it('7', () => {
        expect(truthCheck([{"single": ""}, {"single": "double"}], "single")).toBe(false)
    })

    it('8', () => {
        expect(truthCheck([{"single": "double"}, {"single": undefined}], "single")).toBe(false)
    })

    it('9', () => {
        expect(truthCheck([{"single": "double"}, {"single": NaN}], "single")).toBe(false)
    })
}) 