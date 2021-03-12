const translatePigLatin = require('../exercises/pigLatin')

describe('Pig latin translations', () => {

    it('california must be aliforniacay', () => {
        expect(translatePigLatin('california')).toBe('aliforniacay')
    })

    it('paragraphs must be aragraphspay', () => {
        expect(translatePigLatin('paragraphs')).toBe('aragraphspay')
    })

    it('glove must be oveglay', () => {
        expect(translatePigLatin('glove')).toBe('oveglay')
    })

    it('algorithm must be algorithmway', () => {
        expect(translatePigLatin('algorithm')).toBe('algorithmway')
    })

    it('eight must be eightway', () => {
        expect(translatePigLatin('eight')).toBe('eightway')
    })

    it('schwartz must be artzschway', () => {
        expect(translatePigLatin('schwartz')).toBe('artzschway')
    })

    it('rhythm must be rhythmay', () => {
        expect(translatePigLatin('rhythm')).toBe('rhythmay')
    })
})