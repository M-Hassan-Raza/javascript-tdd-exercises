const ftoc = function (temperature) {
  let celsius = (temperature - 32) * (5 / 9);
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const ctof = function (temperature) {
  let farhenheit = (temperature * (9 / 5)) + 32;
  farhenheit = Math.round(farhenheit * 10) / 10;
  return farhenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
