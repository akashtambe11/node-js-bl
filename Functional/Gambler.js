var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');

var stakes = read.question("Enter Value for Stakes\n");
var goals = read.question("Enter Value for Goals\n");
var trials = read.question("Enter Value for Trials\n");

util.gamblerSimulator(stakes, goals, trials);