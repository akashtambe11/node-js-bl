/********************************************************************************************
*Execution    :  default node     cmd> node InsertionSortStr.js
*
*Purpose      :  To sort the string array and to arrange it in accending order.
*@description  
*
*@file        :  InsertionSortStr.js
*@overview    :  InsertionSortStr module will arrange string array element in accending order.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

insStrMain = () => {
    console.log("Enter the size of an Array")
    var size = util.integerInput();

    var arr = util.arrayStrElementInput(size);

    var InsSortedArr = util.insertionSortString(arr);
    console.log("Sorted Array = "+InsSortedArr);
}
insStrMain();
