function etsiPuhelinnumeroNimella(puhelinluettelo, nimi) {
    const nimiLower = nimi.toLowerCase();
  
    const tulos = puhelinluettelo.find(contact => {
      const kokoNimi = (contact.etunimi + ' ' + contact.sukunimi).toLowerCase();
      return kokoNimi === nimiLower;
    });
  
    return tulos ? tulos.puhelinnumero : '';
  }
  
  module.exports = { etsiPuhelinnumeroNimella };
  