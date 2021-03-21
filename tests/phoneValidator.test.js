const telephoneCheck = require("../exercises/phoneValidator")

describe('US phone validator', () => {
    it('1 555-555-5555', () => {
        expect(telephoneCheck('1 555-555-5555')).toBe(true)
    })

    it('1 (555) 555-5555', () => {
        expect(telephoneCheck('1 (555) 555-5555')).toBe(true)
    })

    it('5555555555', () => {
        expect(telephoneCheck('5555555555')).toBe(true)
    })

    it('555-555-5555', () => {
        expect(telephoneCheck('555-555-5555')).toBe(true)
    })

    it('(555)555-5555', () => {
        expect(telephoneCheck('(555)555-5555')).toBe(true)
    })

    it('1(555)555-5555', () => {
        expect(telephoneCheck('1(555)555-5555')).toBe(true)
    })

    it('555-5555', () => {
        expect(telephoneCheck('555-5555')).toBe(false)
    })

    it('5555555', () => {
        expect(telephoneCheck('5555555')).toBe(false)
    })

    it('1 555)555-5555', () => {
        expect(telephoneCheck('1 555)555-5555')).toBe(false)
    })

    it('1 555 555 5555', () => {
        expect(telephoneCheck('1 555 555 5555')).toBe(true)
    })

    it('1 456 789 4444', () => {
        expect(telephoneCheck('1 456 789 4444')).toBe(true)
    })

    it('123**&!!asdf#', () => {
        expect(telephoneCheck('123**&!!asdf#')).toBe(false)
    })

    it('55555555', () => {
        expect(telephoneCheck('55555555')).toBe(false)
    })

    it('(6054756961)', () => {
        expect(telephoneCheck('(6054756961)')).toBe(false)
    })

    it('2 (757) 622-7382', () => {
        expect(telephoneCheck('2 (757) 622-7382')).toBe(false)
    })

    it('0 (757) 622-7382', () => {
        expect(telephoneCheck('0 (757) 622-7382')).toBe(false)
    })

    it('-1 (757) 622-7382', () => {
        expect(telephoneCheck('-1 (757) 622-7382')).toBe(false)
    })

    it('2 757 622-7382', () => {
        expect(telephoneCheck('2 757 622-7382')).toBe(false)
    })

    it('10 (757) 622-7382', () => {
        expect(telephoneCheck('10 (757) 622-7382')).toBe(false)
    })

    it('27576227382', () => {
        expect(telephoneCheck('27576227382')).toBe(false)
    })

    it('(275)76227382', () => {
        expect(telephoneCheck('(275)76227382')).toBe(false)
    })

    it('2(757)6227382', () => {
        expect(telephoneCheck('2(757)6227382')).toBe(false)
    })

    it('2(757)622-7382', () => {
        expect(telephoneCheck('2(757)622-7382')).toBe(false)
    })

    it('555)-555-5555', () => {
        expect(telephoneCheck('555)-555-5555')).toBe(false)
    })

    it('(555-555-5555', () => {
        expect(telephoneCheck('(555-555-5555')).toBe(false)
    })

    it('(555)5(55?)-5555', () => {
        expect(telephoneCheck('(555)5(55?)-5555')).toBe(false)
    })
})