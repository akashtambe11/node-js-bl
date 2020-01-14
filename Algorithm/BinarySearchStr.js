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
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

binaryStrMain = () => {
    console.log("Enter the Size of an Array\n");
    var size = util.integerInput();

    var arr = util.arrayStrElementInput(size);
   
    console.log("Enter the Search Key in Array\n");
    var key = util.stringInput();

    var keyDetection = util.binarySearchString(arr, key);
    
    if(keyDetection)
        console.log("Your Key '"+key+"' is FOUND in an Array.");
        else
        console.log("Your Key '"+key+"' does NOT found in Search.")
}
binaryStrMain();