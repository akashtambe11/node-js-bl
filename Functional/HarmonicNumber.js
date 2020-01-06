var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');

var nthNumber = parseInt(read.question("Enter nth number of Harmonic Series\n"));

util.harmonic(nthNumber);