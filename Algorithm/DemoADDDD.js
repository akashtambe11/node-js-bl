var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

var num1 = parseInt(read.question("Enter number 1\n"));
var num2 = parseInt(read.question("Enter number 2\n"));

util.add(num1, num2);