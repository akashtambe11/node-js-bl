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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

/**
 * @description The main function is written to get harmonic value of series.
 */
harmonicMain = () => {
    console.log("\nEnter nth number of Harmonic Series");
    var nthNumber = algoUtil.integerInput();

    /**
    * @description Calling harmonic method from FunctionalUtility File.
    */
    var sum = util.harmonic(nthNumber);
    console.log("\nNth Harmonic Value of '"+nthNumber+"' =\n"+sum.toFixed(2));
}

harmonicMain();