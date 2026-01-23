export default function formatCardNumber(cardNumber){
 const V= cardNumber.replace(/\s+/g, '').replace(/[^0-9]/gi, '' );
 const matches = V.match(/\d{4,16}/g);
 const match = (matches && matches[0]) || '';
 const parts = [];
 for (let i = 0; i < match.length; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  return parts.length > 0 ? parts.join(' ') : cardNumber;
}