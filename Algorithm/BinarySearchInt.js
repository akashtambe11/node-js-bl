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
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

binaryIntMain = () => {
    console.log("Enter the Size of an Array\n");
    var size = util.integerInput();

    var arr = util.arrayIntElementInput(size);
    
    console.log("Enter the Search Key in Array\n");
    var key = util.stringInput();

    util.binarySearchInteger(arr, key);
}
binaryIntMain();
