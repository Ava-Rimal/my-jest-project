function productPrice(price, isMember, vatPercent) {
  if (typeof price !== 'number' || typeof isMember !== 'boolean' || typeof vatPercent !== 'number') {
    throw new Error('Virheellinen syöte');
  }
  if (price < 0 || vatPercent < 0) {
    throw new Error('Negatiiviset arvot eivät ole sallittuja');
  }

  let discount = 0;
  if (isMember) {
    if (price >= 300) discount = 0.10;
    else if (price >= 160) discount = 0.05;
    else if (price >= 100) discount = 0.025;
  }

  // Apply VAT first, then discount
  const priceWithVat = price * (1 + vatPercent / 100);
  const discountedPrice = priceWithVat * (1 - discount);

  return Math.round(discountedPrice * 100) / 100;
}

module.exports = productPrice;
