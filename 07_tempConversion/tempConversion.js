const convertToCelsius = function(input) {
//Convert to Celcius where x is in Fahrenheit: (x − 32) × (5/9) °C
  let rawNumber = ((input - 32) * (5/9));
  const convertedToOneDecimal = (Math.round(rawNumber * 10)) / 10;
  return convertedToOneDecimal;
};

const convertToFahrenheit = function(input) {
//Convert to Fahrenheit where x is in Celcius(x × 9/5 + 32) °F
let rawNumber = (input * (9/5)) + 32;
const convertedToOneDecimal = (Math.round(rawNumber * 10)) / 10;
return convertedToOneDecimal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
