/********************************************************************************************
*Execution    :  default node     cmd> node HarmonicNumber.js
*
*Purpose      :  To calculate sum of harmonic series.
*@description  
*
*@file        :  HarmonicNumber.js
*@overview    :  harmonic module is to print addition of hamronic series, where nth number is
                 taken from user.
                 in an array.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
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