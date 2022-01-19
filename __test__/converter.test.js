const {
  calFromFahrenheitToCelsius,
  calFromCelsiusToFahrenheit,
} = require('../services/temperatures');

describe('Temparature test', () => {
  const value = '21';

  // Fahrenheit based on Celsius value
  test('Calculate Fahrenheit based on Celsius value', () => {
    expect(calFromFahrenheitToCelsius(value)).toMatch(new RegExp('^[0-9]*$'));
  });

  // Celsius based on Fahrenheit value
  test('Calculate Celsius based on Fahrenheit value', () => {
    expect(calFromCelsiusToFahrenheit(value)).toMatch(new RegExp('^[0-9]*$'));
  });
});
