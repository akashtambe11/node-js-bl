/********************************************************************************************
*Execution    :  default node     cmd> node PrimeNumberRange.js
*
*Purpose      :  To determine the prime numbers in the range of 0 to 1000 and check wether
                 number are palindrome in same series.
*@description  
*
*@file        :  PrimeNumberRange.js
*@overview    :  primeRange module to print prime range.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

primeRangeMain = () => {

console.log("Enter the Range 0 - ? ");
var range = util.integerInput();

var paliArray = util.primeRange(range);
console.log(paliArray);
}
primeRangeMain();

