function osamaaranLaskeminen(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Virheellinen syöte');
    }
    if (b === 0) {
      throw new Error('Nollalla jako ei ole sallittu');
    }
    return a / b;
  }
  
  module.exports = osamaaranLaskeminen;
  