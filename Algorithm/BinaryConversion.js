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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to convert number to binary expression.
 */
binaryMain = () => {
    console.log("\nEnter number to convert it into Binary");
    var num = util.integerInput();

    /**
    * @description Calling toBinary method from AlgorithmUtility File.
    */
    var binaryConv = util.toBinary(num);
    console.log("\nBinary Conversion for "+num+" = "+binaryConv);  
}
    
binaryMain();
