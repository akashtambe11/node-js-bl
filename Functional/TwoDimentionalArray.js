var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');

var row = read.question("Enter the number of Row\n");
var column = read.question("Enter the number of Column\n")

util.twoDimArrray(row, column);