var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');

var year = read.question("Enter the Year\n");

util.isLeapYear(year);