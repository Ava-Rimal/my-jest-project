const productPrice = require('./t5.productPrice');

test('ei kanta-asiakas, hinta 40, alv 24%', () => {
  expect(productPrice(40, false, 24)).toBe(49.6);
});

test('kanta-asiakas, hinta 100, alv 24%, saa 2.5% alennuksen', () => {
  expect(productPrice(100, true, 24)).toBe(120.9);  // changed from 117.6 to 120.9
});

test('kanta-asiakas, hinta 160, alv 14%, saa 5% alennuksen', () => {
  expect(productPrice(160, true, 14)).toBe(173.28);  // changed from 168.96 to 173.28
});

test('kanta-asiakas, hinta 300, alv 24%, saa 10% alennuksen', () => {
  expect(productPrice(300, true, 24)).toBe(334.8);  // changed from 259.2 to 334.8
});

test('heittää virheen jos syöte on väärä', () => {
  expect(() => productPrice('100', true, 24)).toThrow('Virheellinen syöte');
  expect(() => productPrice(100, 'kyllä', 24)).toThrow('Virheellinen syöte');
  expect(() => productPrice(100, true, '24%')).toThrow('Virheellinen syöte');
});

test('heittää virheen jos negatiivinen hinta tai alv', () => {
  expect(() => productPrice(-10, false, 24)).toThrow('Negatiiviset arvot eivät ole sallittuja');
  expect(() => productPrice(10, false, -24)).toThrow('Negatiiviset arvot eivät ole sallittuja');
});
