const { prompt } = require('inquirer');
const Table = require('cli-table');

/**
 * Apply style to the table
 */
let table = new Table({
  chars: {
    top: '═',
    'top-mid': '╤',
    'top-left': '╔',
    'top-right': '╗',
    bottom: '═',
    'bottom-mid': '╧',
    'bottom-left': '╚',
    'bottom-right': '╝',
    left: '║',
    'left-mid': '╟',
    mid: '─',
    'mid-mid': '┼',
    right: '║',
    'right-mid': '╢',
    middle: '│',
  },
});

/**
 * Calculate Fahrenheit based on Celsius value
 */
const getCalFromFahrenheitToCelsius = async () => {
  const response = await prompt({
    type: 'number',
    name: 'value',
    message: 'Enter your Fahrenheit value:',
  });
  calFromFahrenheitToCelsius(response.value);
};

const calFromFahrenheitToCelsius = (value) => {
  if (value >= 0) {
    const celsius = ((value - 32) * 5) / 9;
    table.push(['Fahrenheit', `${value}`], ['Celsius', celsius]);
    console.log(table.toString());
    console.log('\n*** END ***\n');
  } else {
    invalidType('fahrenheit');
  }
  return value;
};

/**
 * Calculate Celsius based on Fahrenheit value
 */
const getCalFromCelsiusToFahrenheit = async () => {
  const response = await prompt({
    type: 'number',
    name: 'value',
    message: 'Enter your Celsius value:',
  });
  calFromCelsiusToFahrenheit(response.value);
};

const calFromCelsiusToFahrenheit = (value) => {
  if (value >= 0) {
    const Fahrenheit = (value * 9) / 5 + 32;
    table.push(['Celsius', `${value}`], ['Fahrenheit', `${Fahrenheit}`]);
    console.log(table.toString());
    console.log('\n*** END ***\n');
  } else {
    invalidType('celsius');
  }
  return value;
};

/**
 * Invalid type
 */
const invalidType = (type) => {
  if (type === 'fahrenheit') {
    console.log('\n*** Please enter a valid number. ***\n');
    getCalFromFahrenheitToCelsius();
  } else if (type === 'celsius') {
    console.log('\n*** Please enter a valid number. ***\n');
    getCalFromCelsiusToFahrenheit();
  }
};

module.exports = {
  calFromFahrenheitToCelsius,
  calFromCelsiusToFahrenheit,
  invalidType,
  getCalFromFahrenheitToCelsius,
  getCalFromCelsiusToFahrenheit,
};
