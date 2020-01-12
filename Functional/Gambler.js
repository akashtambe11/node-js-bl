var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

gamblerMain = () => {
console.log("Enter Value for Stakes");
var stakes = algoUtil.integerInput();
console.log("\nEnter Value for Goals");
var goals = algoUtil.integerInput();
console.log("\nEnter Value for Trials");
var trials = algoUtil.integerInput();

var gamblerAns = util.gamblerSimulator(stakes, goals, trials);
console.log("\nNumber of Wins    = "+gamblerAns[0]);
console.log("Percentage of win = "+gamblerAns[1]+" %");
console.log("Percentage of win = "+gamblerAns[2]+" %");
}

gamblerMain();