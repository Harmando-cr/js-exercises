const rot13 = require('../exercises/caesarCipher')

describe('Caesar Cipher rot 13', () => {

  it('SERR PBQR PNZC', () => {
    expect(rot13('SERR PBQR PNZC')).toBe('FREE CODE CAMP')
  })

  it('SERR CVMMN!', () => {
    expect(rot13('SERR CVMMN!')).toBe('FREE PIZZA!')
  })

  it('SERR YBIR?', () => {
    expect(rot13('SERR YBIR?')).toBe('FREE LOVE?')
  })

  it('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.', () => {
    expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
  })

})

