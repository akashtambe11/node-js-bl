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
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

binFileMain = () => {
    console.log("Enter the name of Fruits\n");
    var name = util.stringInput();

    util.binSearchStringFile(name);
}
binFileMain();
