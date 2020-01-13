/********************************************************************************************
*Execution    :  default node     cmd> node MergeSortStr.js
*
*Purpose      :  To sort the string array and to arrange it in accending order.
*@description  
*
*@file        :  MergeSortStr.js
*@overview    :  MergeSortStr module will arrange string array element in accending order.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

mergeStrMain = () => {
    console.log("Enter the size of an Array")
    var size = util.integerInput();

    var arr = util.arrayStrElementInput(size);

    var mergeSortedArr = util.mergeSortString(arr);
    console.log("Sorted Array = "+mergeSortedArr);
}
mergeStrMain();