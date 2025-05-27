function yhteystietoHTMLksi(yhteystieto) {
  const { etunimi, sukunimi, puhelinnumero } = yhteystieto;
  const numeroTeksti = puhelinnumero ? ` : ${puhelinnumero}` : '';
  return `<li>${sukunimi}, ${etunimi}${numeroTeksti}</li>`;
}

module.exports = {
  yhteystietoHTMLksi,
};
