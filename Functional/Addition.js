var read = require('readline-sync');
var obj = require('../Utility/FunctionalUtility');

var a = parseInt(read.question("Enter number 1 = "));
var b = parseInt(read.question("Enter number 2 = "));

obj.add(a,b);