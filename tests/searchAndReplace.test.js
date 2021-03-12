const myReplace = require('../exercises/searchAndReplace')

describe('Search and Replace test', () => {
    it('replace "store" for "mall"', () => {
        expect(myReplace('Let us go to the store', 'store', 'mall')).toBe('Let us go to the mall')
    })

    it('replace "Sleeping" for "sitting"', () => {
        expect(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')).toBe('He is Sitting on the couch')
    })

    it('replace "up" for "Down"', () => {
        expect(myReplace('I think we should look up there', 'up', 'Down')).toBe('I think we should look down there')
    })

    it('replace "spellngi" for "spelling"', () => {
        expect(myReplace('This has a spellngi error', 'spellngi', 'spelling')).toBe('This has a spelling error')
    })

    it('replace "Tom" for "john"', () => {
        expect(myReplace('His name is Tom', 'Tom', 'john')).toBe('His name is John')
    })

    it('replace "Coding" for "algorithms"', () => {
        expect(myReplace('Let us get back to more Coding', 'Coding', 'algorithms')).toBe('Let us get back to more Algorithms')
    })
})