/********************************************************************************************
*Execution    :  default node     cmd> node BinSearchStrFile.js
*
*Purpose      :  To search string key in array from external file.
*@description  
*
*@file        :  BinSearchStrFile.js
*@overview    :  BinSearchStrFile module will help to seach string key from an array and it will 
                 show result is found or not
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to search binary string from and array of text file.
 */
binFileMain = () => {
    console.log("\nEnter the name of Fruits");
    var name = util.stringInput();

    /**
    * @description Calling binSearchStringFile method from AlgorithmUtility File.
    */
    util.binSearchStringFile(name);
}

binFileMain();
