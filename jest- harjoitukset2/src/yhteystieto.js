const { tarkistaPuhelinnumero } = require('./puhelinUtils');

function luoYhteystieto(etunimi, sukunimi, puhelinnumero) {
  if (!etunimi || !sukunimi) {
    throw new Error('Etunimi ja sukunimi ovat pakollisia');
  }

  let numero = '';

  if (puhelinnumero) {
    try {
      numero = tarkistaPuhelinnumero(puhelinnumero);
    } catch (error) {
      numero = '';
    }
  }

  return {
    etunimi,
    sukunimi,
    puhelinnumero: numero,
  };
}

module.exports = { luoYhteystieto };
