const { luoYhteystieto } = require('../src/yhteystieto');

describe('luoYhteystieto', () => {
  test('palauttaa oikean olion oikeilla tiedoilla', () => {
    const yhteystieto = luoYhteystieto('Matti', 'Meikäläinen', '+358-40-1234567');
    expect(yhteystieto).toEqual({
      etunimi: 'Matti',
      sukunimi: 'Meikäläinen',
      puhelinnumero: '+358-40-1234567',
    });
  });

  test('heittää virheen, jos etunimi puuttuu', () => {
    expect(() => {
      luoYhteystieto('', 'Meikäläinen');
    }).toThrow('Etunimi ja sukunimi ovat pakollisia');
  });

  test('heittää virheen, jos sukunimi puuttuu', () => {
    expect(() => {
      luoYhteystieto('Matti', '');
    }).toThrow('Etunimi ja sukunimi ovat pakollisia');
  });

  test('palauttaa tyhjän numeron, jos puhelinnumero on virheellinen', () => {
    const yhteystieto = luoYhteystieto('Matti', 'Meikäläinen', 'abc123');
    expect(yhteystieto.puhelinnumero).toBe('');
  });

  test('palauttaa tyhjän numeron, jos puhelinnumeroa ei anneta', () => {
    const yhteystieto = luoYhteystieto('Matti', 'Meikäläinen');
    expect(yhteystieto.puhelinnumero).toBe('');
  });
});
