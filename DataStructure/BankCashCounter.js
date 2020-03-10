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
var util = require('../Utility/DSutility')
var algoUtil = require('../Utility/AlgorithmUtility');

BankCashQueueMain = () => {

    console.log("Enter number of people in queue");
    var people = parseInt(algoUtil.integerInput());

    var bankAmount = 100000;
    console.log("NOTE: Total Bank Amount = 1,00,000 Rs.");
    
    util.bankCounter(people, bankAmount);
    
}

BankCashQueueMain();