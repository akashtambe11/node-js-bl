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
