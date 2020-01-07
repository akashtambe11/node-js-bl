var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');

var str = "Hello <<UserName>>, How are you?";
console.log(str);
var name = read.question("Enter your Username\n")

util.replaceString(str, name);