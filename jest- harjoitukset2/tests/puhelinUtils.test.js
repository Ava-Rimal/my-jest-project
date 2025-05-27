const { tarkistaPuhelinnumero } = require('../src/puhelinUtils');


describe('tarkistaPuhelinnumero', () => {
  test('hyväksyy oikean muotoisen numeron', () => {
    expect(tarkistaPuhelinnumero('+358 40-123 4567')).toBe('+358 40-123 4567');
    expect(tarkistaPuhelinnumero('0401234567')).toBe('0401234567');
    expect(tarkistaPuhelinnumero('+358-40-123-4567')).toBe('+358-40-123-4567');
  });

  test('poistaa sulut', () => {
    expect(tarkistaPuhelinnumero('(040) 123-4567')).toBe('040 123-4567');
  });

  test('heitää virheen kielletyistä merkeistä', () => {
    expect(() => tarkistaPuhelinnumero('040#1234567')).toThrow('Puhelinnumerossa on kiellettyjä merkkejä');
    expect(() => tarkistaPuhelinnumero('abc')).toThrow('Puhelinnumerossa on kiellettyjä merkkejä');
  });

  test('heitää virheen liian lyhyestä tai pitkästä numerosta', () => {
    expect(() => tarkistaPuhelinnumero('12')).toThrow('Puhelinnumeron pituuden tulee olla 3-20 merkkiä');
    expect(() => tarkistaPuhelinnumero('1'.repeat(21))).toThrow('Puhelinnumeron pituuden tulee olla 3-20 merkkiä');
  });
});
