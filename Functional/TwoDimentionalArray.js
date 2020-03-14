/********************************************************************************************
*Execution    :  default node     cmd> node TwoDimentionalArray.js
*
*Purpose      :  To take size of row and column as well as array element to print two 
                 dimentional array 
*@description  
*
*@file        :  TwoDimentionalArray.js
*@overview    :  twoDimArrray module will take size of row and column and array element from
                 user to print that 2D array.
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
 * @description The main function is written to find add 2D array.
 */
twoDimArrayMain = () => {
console.log("\nEnter the number of Row");
var row = algoUtil.integerInput();

console.log("\nEnter the number of Column");
var column = algoUtil.integerInput();

/**
 * @description Calling twoDimArrray method from FunctionalUtility File.
 */
util.twoDimArrray(row, column);
}

twoDimArrayMain();
