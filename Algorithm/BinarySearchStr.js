/********************************************************************************************
*Execution    :  default node     cmd> node BinarySearchStr.js
*
*Purpose      :  To search string key in array.
*@description  
*
*@file        :  BinarySearchStr.js
*@overview    :  BinarySearchStr module will help to seach string key from an array and it will 
                 show result is found or not
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to search binary string from and array.
 */
binaryStrMain = () => {
    console.log("\nEnter the Size of an Array");
    var size = util.integerInput();

    /**
    * @description Calling arrayStrElementInput method from AlgorithmUtility File to take 
    *              string as input.             
    */
    var arr = util.arrayStrElementInput(size);
   
    console.log("\nEnter the Search Key in Array");
    var key = util.stringInput();

    /**
    * @description Calling binarySearchString method from AlgorithmUtility File.
    */
    var keyDetection = util.binarySearchString(arr, key);
    
    if(keyDetection)
        console.log("\nYour Key '"+key+"' is FOUND in an Array.");
        else
        console.log("\nYour Key '"+key+"' does NOT found in Search.");
}

binaryStrMain();