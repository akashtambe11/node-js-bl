/********************************************************************************************
*Execution    :  default node     cmd> node BinarySearchInt.js
*
*Purpose      :  To search integer key in array.
*@description  
*
*@file        :  BinarySearchInt.js
*@overview    :  BinarySearchInt module will help to seach integer key from an array and it will 
                 show result is found or not
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to search binary integer from and array.
 */
binaryIntMain = () => {
    console.log("\nEnter the Size of an Array");
    var size = util.integerInput();

    /**
    * @description Calling arrayIntElementInput method from AlgorithmUtility File to take 
    *              integers as input.             
    */
    var arr = util.arrayIntElementInput(size);
    
    console.log("\nEnter the Search Key in Array");
    var key = util.integerInput();
    
    /**
    * @description Calling binarySearchInteger method from AlgorithmUtility File.
    */
    var keyDetection = util.binarySearchInteger(arr, key);
   
    if(keyDetection)
        console.log("\nYour Key '"+key+"' is FOUND in an Array.");
        else
        console.log("\nYour Key '"+key+"' does NOT found in Search.");
}

binaryIntMain();
