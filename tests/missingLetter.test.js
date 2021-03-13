const fearNotLetter = require('../exercises/missingLetter')

describe('Find missing letter', () => {
    it('abce', () => {
        expect(fearNotLetter('abce')).toBe('d')
    })

    it('abcdefghjklmno', () => {
        expect(fearNotLetter('abcdefghjklmno')).toBe('i')
    })

    it('stvwx', () => {
        expect(fearNotLetter('stvwx')).toBe('u')
    })

    it('bcdf', () => {
        expect(fearNotLetter('bcdf')).toBe('e')
    })

    it('abcdefghijklmnopqrstuvwxyz', () => {
        expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toBe(undefined)
    })
})