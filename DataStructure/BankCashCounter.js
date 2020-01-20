var util = require('../Utility/DSStackUtility')
var read = require('readline-sync');
var algoUtil = require('../Utility/AlgorithmUtility');

BankCashQueueMain = () => {

    console.log("Enter number of people in queue");
    var people = parseInt(algoUtil.integerInput());

    var amount = 100000;
    console.log("NOTE: Total Bank Amount = 1,00,000 Rs.");
    

    util.bankCounter(people, amount);
    



}

BankCashQueueMain();