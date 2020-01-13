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
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

vendingMain = () => {
var noteArr = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
var money = read.question("Enter your amount of Money\n");

util.vendingMachineCal(noteArr, money);
}
vendingMain();