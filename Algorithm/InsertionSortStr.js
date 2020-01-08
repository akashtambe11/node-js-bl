var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

var size = parseInt(read.question("Enter the Size of an Elements\n"));

util.insertionSortString(size);