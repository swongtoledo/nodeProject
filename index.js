var chalk= require('chalk')
var n2f = require('num2fraction')

var num = Math.random();
console.log( chalk.yellow.bgRed("the fraction of " + num +" is "+ n2f(num)))