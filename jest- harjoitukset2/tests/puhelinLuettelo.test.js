const { etsiPuhelinnumeroNimella } = require('../src/puhelinLuettelo');

describe('etsiPuhelinnumeroNimella', () => {
  const puhelinluettelo = [
    { etunimi: 'Matti', sukunimi: 'Meikäläinen', puhelinnumero: '040-1234567' },
    { etunimi: 'Maija', sukunimi: 'Meikäläinen', puhelinnumero: '050-7654321' },
  ];

  test('löytää numeron isolla kirjaimella', () => {
    expect(etsiPuhelinnumeroNimella(puhelinluettelo, 'Matti Meikäläinen')).toBe('040-1234567');
  });

  test('löytää numeron pienellä kirjaimella', () => {
    expect(etsiPuhelinnumeroNimella(puhelinluettelo, 'matti meikäläinen')).toBe('040-1234567');
  });

  test('palauttaa tyhjän, jos nimeä ei löydy', () => {
    expect(etsiPuhelinnumeroNimella(puhelinluettelo, 'Jaska Jokunen')).toBe('');
  });
});
