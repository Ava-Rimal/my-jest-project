function ympyraAla(sade) {
    if (typeof sade !== 'number' || sade < 0) {
      throw new Error('Virheellinen syöte');
    }
    const ala = Math.PI * sade * sade;
    return Math.round(ala * 100) / 100;
  }
  
  module.exports = ympyraAla;
  