var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

var name = read.question("Enter the name of Fruits\n");

util.binSearchStringFile(name);