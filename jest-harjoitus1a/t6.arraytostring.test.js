const arrayToString = require('./t6.arraytostring');

test('muuttaa taulukon merkkijonoksi', () => {
  expect(arrayToString(['a', 'b', 'c'])).toBe('a:b:c');
  expect(arrayToString([1, 2, 3])).toBe('1:2:3');
  expect(arrayToString([true, false, true])).toBe('true:false:true');
  expect(arrayToString(['abc', 123, true])).toBe('abc:123:true');
  expect(arrayToString([])).toBe('');
});

test('heitää virheen jos syöte ei ole taulukko', () => {
  expect(() => arrayToString('abc')).toThrow('Syötteen tulee olla taulukko');
});

test('heitää virheen jos taulukossa on kielletty alkio', () => {
  expect(() => arrayToString([null])).toThrow();
  expect(() => arrayToString([undefined])).toThrow();
  expect(() => arrayToString([{}])).toThrow();
  expect(() => arrayToString([[]])).toThrow();
});
