function ikaTarkistus(ika) {
    if (typeof ika !== 'number') {
      throw new Error('Virheellinen syöte');
    }
    return ika >= 18;
  }
  
  module.exports = ikaTarkistus;
  