const osamaaranLaskeminen = require('./t2.osamäärän laskeminen');

test('jakaa 10 ja 2 tuloksen ollessa 5', () => {
  expect(osamaaranLaskeminen(10, 2)).toBe(5);
});

test('heittää virheen jos a on merkkijono', () => {
  expect(() => osamaaranLaskeminen('kymmenen', 2)).toThrow('Virheellinen syöte');
});

test('heittää virheen jos b on merkkijono', () => {
  expect(() => osamaaranLaskeminen(10, 'kaksi')).toThrow('Virheellinen syöte');
});

test('heittää virheen jos b on 0', () => {
  expect(() => osamaaranLaskeminen(10, 0)).toThrow('Nollalla jako ei ole sallittu');
});
