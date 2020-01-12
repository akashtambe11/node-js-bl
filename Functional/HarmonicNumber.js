var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

harmonicMain = () => {
console.log("Enter nth number of Harmonic Series\n");
var nthNumber = algoUtil.integerInput();

var sum = util.harmonic(nthNumber);
console.log("\nHarmonic Value for "+nthNumber+" = \n"+sum);
}

harmonicMain();