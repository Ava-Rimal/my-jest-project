const ikaTarkistus = require('./t1.ikatarkistus');

test('palauttaa true kun ikä on 18', () => {
  expect(ikaTarkistus(18)).toBe(true);
});

test('palauttaa false kun ikä on alle 18', () => {
  expect(ikaTarkistus(10)).toBe(false);
});

test('heittää virheen kun syöte on merkkijono', () => {
  expect(() => ikaTarkistus("abc")).toThrow('Virheellinen syöte');
});
