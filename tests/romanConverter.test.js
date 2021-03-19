const converToRoman = require('../exercises/romanConverter')

describe('conver to roman', () => {
  it('2', () => {
    expect(converToRoman(2)).toBe('II')
  })
  
  it('3', () => {
    expect(converToRoman(3)).toBe('III')
  })

  it('4', () => {
    expect(converToRoman(4)).toBe('IV')
  })
  
  it('5', () => {
    expect(converToRoman(5)).toBe('V')
  })
 
  it('9', () => {
    expect(converToRoman(9)).toBe('IX')
  })
 
  it('12', () => {
    expect(converToRoman(12)).toBe('XII')
  })
 
  it('16', () => {
    expect(converToRoman(16)).toBe('XVI')
  })
 
  it('29', () => {
    expect(converToRoman(29)).toBe('XXIX')
  })
 
  it('44', () => {
    expect(converToRoman(44)).toBe('XLIV')
  })
 
  it('45', () => {
    expect(converToRoman(45)).toBe('XLV')
  })
 
  it('68', () => {
    expect(converToRoman(68)).toBe('LXVIII')
  })
 
  it('83', () => {
    expect(converToRoman(83)).toBe('LXXXIII')
  })
 
  it('97', () => {
    expect(converToRoman(97)).toBe('XCVII')
  })
  
  it('99', () => {
    expect(converToRoman(99)).toBe('XCIX')
  })
 
  it('400', () => {
    expect(converToRoman(400)).toBe('CD')
  })
 
  it('500', () => {
    expect(converToRoman(500)).toBe('D')
  })
 
  it('501', () => {
    expect(converToRoman(501)).toBe('DI')
  })
 
  it('649', () => {
    expect(converToRoman(649)).toBe('DCXLIX')
  })
 
  it('798', () => {
    expect(converToRoman(798)).toBe('DCCXCVIII')
  })
 
  it('891', () => {
    expect(converToRoman(891)).toBe('DCCCXCI')
  })
 
  it('1000', () => {
    expect(converToRoman(1000)).toBe('M')
  })
 
  it('1004', () => {
    expect(converToRoman(1004)).toBe('MIV')
  })
 
  it('1006', () => {
    expect(converToRoman(1006)).toBe('MVI')
  })
 
  it('1023', () => {
    expect(converToRoman(1023)).toBe('MXXIII')
  })
 
  it('2014', () => {
    expect(converToRoman(2014)).toBe('MMXIV')
  })
 
  it('3999', () => {
    expect(converToRoman(3999)).toBe('MMMCMXCIX')
  })
})
