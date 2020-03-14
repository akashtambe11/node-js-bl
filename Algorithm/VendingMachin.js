/********************************************************************************************
*Execution    :  default node     cmd> node VendingMachin.js
*
*Purpose      :  To determine the number of notes from input money.
*@description  
*
*@file        :  VendingMachin.js
*@overview    :  vendingMachineCal module to print number of notes from the entered total money.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to find changes to be given to amount of money.
 */
vendingMain = () => {

    /**
     * @description noteArr Array to store money is sorted format
     */
    var noteArr = [1000, 500, 100, 50, 20, 10, 5, 2, 1];

    console.log("\nEnter Amount of Money:");
    var money = parseInt(util.integerInput());

    /**
    * @description Calling vendingMachineCal method from AlgorithmUtility File.
    */
    util.vendingMachineCal(noteArr, money);
}

vendingMain();