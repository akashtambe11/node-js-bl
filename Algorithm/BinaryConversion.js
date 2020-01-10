var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

var num = parseInt(read.question('Enter number to convert it into Binary Representation\n'));

var binaryConv = util.toBinary(num);
console.log(binaryConv);