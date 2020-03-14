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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to find out prime number range.
 */
primeRangeMain = () => {

    console.log("\nEnter the Range 0 - ? ");
    var range = util.integerInput();

    /**
    * @description Calling primeRange method from AlgorithmUtility File.
    */
    var paliArray = util.primeRange(range);
    
    for(let i in paliArray) {
        console.log(paliArray[i]);
    }
    
}

primeRangeMain();

