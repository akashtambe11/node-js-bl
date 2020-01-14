/********************************************************************************************
*Execution    :  default node     cmd> node PrimeFactors.js
*
*Purpose      :  To determine prime factors of input number.
*@description  
*
*@file        :  PrimeFactors.js
*@overview    :  pFactors module print any of the prime numbers that can be multiplied to give the 
                 original number. Example: The prime factors of 15 are 3 and 5
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

primeFactorMain = () => {

    console.log("Enter number to find prime factors");
    var num = algoUtil.integerInput();

    util.pFactors(num);
    
    
}
primeFactorMain();