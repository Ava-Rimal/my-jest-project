function arrayToString(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Syötteen tulee olla taulukko');
    }
  
    for (const item of arr) {
      const type = typeof item;
      if (type !== 'string' && type !== 'number' && type !== 'boolean') {
        throw new Error('Taulukon alkiot voivat olla vain merkkijonoja, lukuja tai totuusarvoja');
      }
    }
  
    return arr.join(':');
  }
  
  module.exports = arrayToString;
  