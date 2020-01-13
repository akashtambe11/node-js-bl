/********************************************************************************************
*Execution    :  default node     cmd> node Gambler.js
*
*Purpose      :  To calculate percentage of win and loose in gambling game.
*@description  
*
*@file        :  Gambler.js
*@overview    :  gamblerSimulator module print generate random number to play gambling game,
                 will show the values for percentage of win and loose.
                 in an array.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
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
console.log("Percentage of win   = "+gamblerAns[1]+" %");
console.log("Percentage of loose = "+gamblerAns[2]+" %");
}

gamblerMain();