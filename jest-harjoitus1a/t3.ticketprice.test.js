const lippuHinta = require('./t3.ticketprice');

test('ikä 7 tai alle, hinta 0', () => {
  expect(lippuHinta(7)).toBe(0);
  expect(lippuHinta(5)).toBe(0);
});

test('ikä alle 16, hinta 1', () => {
  expect(lippuHinta(8)).toBe(1);
  expect(lippuHinta(15)).toBe(1);
});

test('ikä 16-25, hinta 1.5', () => {
  expect(lippuHinta(16)).toBe(1.5);
  expect(lippuHinta(25)).toBe(1.5);
  expect(lippuHinta(20)).toBe(1.5);
});

test('ikä yli 65, hinta 1.5', () => {
  expect(lippuHinta(66)).toBe(1.5);
  expect(lippuHinta(80)).toBe(1.5);
});

test('ikä 26-65, hinta 3', () => {
  expect(lippuHinta(26)).toBe(3);
  expect(lippuHinta(65)).toBe(3);
  expect(lippuHinta(50)).toBe(3);
});

test('heittää virheen, kun syöte ei ole numero', () => {
  expect(() => lippuHinta('abc')).toThrow('Virheellinen syöte');
  expect(() => lippuHinta(null)).toThrow('Virheellinen syöte');
});
