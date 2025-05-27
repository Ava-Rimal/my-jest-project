const { yhteystietoHTMLksi } = require('../src/yhteystietoHtml');

describe('yhteystietoHTMLksi', () => {
  test('muuttaa yhteystieto-olion HTML-listaelementiksi', () => {
    const yhteystieto = {
      etunimi: 'Matti',
      sukunimi: 'Meikäläinen',
      puhelinnumero: '040-1234567',
    };

    expect(yhteystietoHTMLksi(yhteystieto)).toBe('<li>Meikäläinen, Matti : 040-1234567</li>');
  });

  test('toimii, vaikka puhelinnumero puuttuisi', () => {
    const yhteystieto = {
      etunimi: 'Matti',
      sukunimi: 'Meikäläinen',
      puhelinnumero: '',
    };

    expect(yhteystietoHTMLksi(yhteystieto)).toBe('<li>Meikäläinen, Matti</li>');
  });
});
