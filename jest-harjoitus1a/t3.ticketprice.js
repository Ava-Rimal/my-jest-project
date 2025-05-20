function lippuHinta(ika) {
    if (typeof ika !== 'number') {
      throw new Error('Virheellinen syöte');
    }
  
    if (ika <= 7) {
      return 0;
    } else if (ika < 16) {
      return 1;
    } else if (ika <= 25) {
      return 1.5;
    } else if (ika > 65) {
      return 1.5;
    } else {
      return 3;
    }
  }
  
  module.exports = lippuHinta;
  