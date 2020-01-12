var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

BinaryMain = () => {
console.log("Enter number to convert it into Binary\n");
var num = util.integerInput();

var binaryConv = util.toBinary(num);
console.log("Binary Conversion for "+num+" = "+binaryConv);  
}
BinaryMain();
