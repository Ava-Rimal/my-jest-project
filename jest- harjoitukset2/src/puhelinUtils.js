function tarkistaPuhelinnumero(numero) {
    if (typeof numero !== 'string') {
      throw new Error('Puhelinnumeron tulee olla merkkijono');
    }
  
    // Poistetaan sulut
    let siivottu = numero.replace(/[()]/g, '');
  
    // Sallitaan vain numerot, välilyönnit, miinusmerkit ja + alussa
    if (!/^(\+)?[0-9 -]+$/.test(siivottu)) {
      throw new Error('Puhelinnumerossa on kiellettyjä merkkejä');
    }
  
    // Poistetaan välilyönnit ja miinusmerkit pituuden tarkistusta varten
    let pelkkäNumero = siivottu.replace(/[\s-]/g, '');
  
    if (pelkkäNumero.length < 3 || pelkkäNumero.length > 20) {
      throw new Error('Puhelinnumeron pituuden tulee olla 3-20 merkkiä');
    }
  
    return siivottu;
  }
  
  module.exports = { tarkistaPuhelinnumero };
  