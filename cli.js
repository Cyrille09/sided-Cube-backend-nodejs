const username = require('os').userInfo().username;
const { getConverter } = require('./converter');

// Print the welcome message including the host username
console.log(`\nDear ${username}, welcome to our temperature converter formula`);

// Pause for a second after the welcome message
function myFunc(arg) {
  getConverter();
}
setTimeout(myFunc, 1000, 'cyrille');
