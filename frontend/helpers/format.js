const formatPriceFromString = (priceStr) => {
  const number = parseInt(priceStr.replace(/\./g, ''), 10);
  return number.toLocaleString('vi-VN') + '₫';
};
export default formatPriceFromString;
