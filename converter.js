const {
  getCalFromFahrenheitToCelsius,
  getCalFromCelsiusToFahrenheit,
} = require('./services/temperatures');
const { prompt } = require('inquirer');
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

/**
 * Reset the temparature converter
 */
function resetConverter() {
  prompt([
    {
      type: 'input',
      name: 'value',
      message: 'Enter YES to continue or NO to exit: ',
    },
  ]).then((answer) => {
    if (
      answer.value.toString().toLowerCase() === 'yes' ||
      answer.value.toString().toLowerCase() === 'y'
    ) {
      getConverter();
    } else {
      process.exit(1);
    }
  });
}

/**
 * Start the command and select the formala
 */
async function getConverter() {
  const questions = [
    {
      type: 'number',
      name: 'value',
      message:
        'Temparature formula!\n 1 - Convert from Fahrenheit to Celsius \n 2 - Convert from Celsius to Fahrenheit \n Please enter the number that discribes your best answer (1 or 2):',
    },
  ];

  program
    .command('start')
    .alias('s')
    .description('temperature converter using NodeJS')
    .action(() => {
      prompt(questions).then((answers) => {
        if (answers.value === 1) {
          getCalFromFahrenheitToCelsius();
        } else if (answers.value === 2) {
          getCalFromCelsiusToFahrenheit();
        } else {
          console.log(
            '*** You have entered a wrong value. Only 1 or 2 is acepted ***'
          );
          resetConverter();
        }
      });
    });

  program.parse(process.argv);
}
module.exports.getConverter = getConverter;
