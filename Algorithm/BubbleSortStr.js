/********************************************************************************************
*Execution    :  default node     cmd> node BubbleSortStr.js
*
*Purpose      :  To sort the string array and to arrange it in accending order.
*@description  
*
*@file        :  BubbleSortStr.js
*@overview    :  BubbleSortStr module will arrange string array element in accending order.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

bubStrMain = () => {
    console.log("Enter the size of an Array")
    var size = util.integerInput();

    var arr = util.arrayStrElementInput(size);

    var BubSortedArr = util.bubleSortString(arr);
    console.log("Sorted Array = "+BubSortedArr);
}
bubStrMain();


