// t5.productPrice.js

function productPrice(price, isMember, vatPercent) {
    // Validate input types
    if (typeof price !== 'number' || typeof isMember !== 'boolean' || typeof vatPercent !== 'number') {
      throw new Error('Virheellinen syöte');
    }
    if (price < 0 || vatPercent < 0) {
      throw new Error('Negatiiviset arvot eivät ole sallittuja');
    }
  
    // Calculate discount if member
    let discount = 0;
    if (isMember) {
      if (price >= 300) discount = 0.10;
      else if (price >= 160) discount = 0.05;
      else if (price >= 100) discount = 0.025;
    }
  
    const discountedPrice = price * (1 - discount);
    const priceWithVat = discountedPrice * (1 + vatPercent / 100);
  
    // Round to two decimals
    return Math.round(priceWithVat * 100) / 100;
  }
  
  // Export the function
  module.exports = productPrice;
  