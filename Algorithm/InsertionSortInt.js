/********************************************************************************************
*Execution    :  default node     cmd> node InsertionSortInt.js
*
*Purpose      :  To sort the integer array and to arrange it in accending order.
*@description  
*
*@file        :  InsertionSortInt.js
*@overview    :  InsertionSortInt module will arrange integer array element in accending order.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

insIntMain = () => {
    console.log("Enter the size of an Array")
    var size = util.integerInput();

    var arr = util.arrayIntElementInput(size);

    var InsSortedArr = util.insertionSortInteger(arr);
    console.log("Sorted Array = "+InsSortedArr);
}
insIntMain();
