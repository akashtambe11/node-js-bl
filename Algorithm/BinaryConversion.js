/********************************************************************************************
*Execution    :  default node     cmd> node BinaryConversion.js
*
*Purpose      :  To convert number into binary representation.
*@description  
*
*@file        :  BinaryConversion.js
*@overview    :  BinaryConversion module is to convert decimal to binary.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

binaryMain = () => {
console.log("Enter number to convert it into Binary\n");
var num = util.integerInput();

var binaryConv = util.toBinary(num);
console.log("Binary Conversion for "+num+" = "+binaryConv);  
}
binaryMain();
