const pairElement = require('../exercises/DNAPairing')

describe('DNA Pairing', () => {
    it('GCG', () => {
        expect(pairElement('GCG')).toEqual([["G", "C"], ["C","G"], ["G", "C"]])
    })

    it('ATCGA', () => {
        expect(pairElement('ATCGA')).toEqual([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]])
    })

    it('TTGAG', () => {
        expect(pairElement('TTGAG')).toEqual([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]])
    })

    it('CTCTA', () => {
        expect(pairElement('CTCTA')).toEqual([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]])
    })
})