var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

var noteArr = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
var money = read.question("Enter your amount of Money\n");

util.vendingMachineCal(noteArr, money);