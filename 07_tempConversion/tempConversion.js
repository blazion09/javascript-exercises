const convertToCelsius = function(input) {
//Convert Celcius to Fahrenheit where x is in Celcius: (x − 32) × (5/9) °C
  let rawNumber = ((input - 32) * (5/9));
  const convertedToOneDecimal = (Math.round(rawNumber * 10)) / 10;
  return convertedToOneDecimal;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
