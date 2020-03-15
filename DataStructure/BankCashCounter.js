/********************************************************************************************
*Execution    :  default node     cmd> node BankCashCounter.js
*
*Purpose      :  To determine the money left in bank after transaction of users.
*@description  
*
*@file        :  BankCashCounter.js
*@overview    :  BankCashCounter module is to determine money left in bank.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSutility')
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to perform bank transaction using queue.
 */
BankCashQueueMain = () => {

    console.log("\nEnter number of people in queue");
    var people = parseInt(algoUtil.integerInput());

    var bankAmount = 100000;
    console.log("\nNOTE: Total Bank Amount = 1,00,000 Rs.");
    
    /**
    * @description Calling bankCounter method from DSutility File.
    */
    util.bankCounter(people, bankAmount);
    
}

BankCashQueueMain();