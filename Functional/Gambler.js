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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

/**
 * @description The main function is written to play gambler.
 */
gamblerMain = () => {
    console.log("\nEnter Value for Stakes");
    var stakes = algoUtil.integerInput();

    console.log("\nEnter Value for Goals");
    var goals = algoUtil.integerInput();

    console.log("\nEnter Value for Trials");
    var trials = algoUtil.integerInput();

    /**
    * @description Calling gamblerSimulator method from FunctionalUtility File.
    */
    var gamblerAns = util.gamblerSimulator(stakes, goals, trials);
    console.log("\nNumber of Wins      = "+gamblerAns[0]);

    /**
    * @description toFixed(2) to get only two digit after decimal digit.
    */
    console.log("Percentage of win   = "+gamblerAns[1].toFixed(2)+" %");
    console.log("Percentage of loose = "+gamblerAns[2].toFixed(2)+" %");
}

gamblerMain();