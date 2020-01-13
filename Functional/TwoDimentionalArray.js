var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

twoDimArrayMain = () => {
console.log("\nEnter the number of Row");
var row = algoUtil.integerInput();

console.log("\nEnter the number of Column");
var column = algoUtil.integerInput();

util.twoDimArrray(row, column);
}

twoDimArrayMain();
