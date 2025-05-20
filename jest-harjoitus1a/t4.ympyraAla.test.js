const ympyraAla = require('./t4.ympyraAla');

test('laskee ympyrän alan säteellä 0', () => {
  expect(ympyraAla(0)).toBe(0);
});

test('laskee ympyrän alan säteellä 2', () => {
  expect(ympyraAla(2)).toBeCloseTo(12.57);
});

test('pyöristää kahden desimaalin tarkkuudella', () => {
  expect(ympyraAla(1.123)).toBe(3.96);
});

test('heittää virheen, jos syöte on merkkijono', () => {
  expect(() => ympyraAla('abc')).toThrow('Virheellinen syöte');
});

test('heittää virheen, jos säde on negatiivinen', () => {
  expect(() => ympyraAla(-5)).toThrow('Virheellinen syöte');
});
