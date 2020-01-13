/********************************************************************************************
*Execution    :  default node     cmd> node BubbleSortInt.js
*
*Purpose      :  To sort the integer array and to arrange it in accending order.
*@description  
*
*@file        :  BubbleSortInt.js
*@overview    :  BubbleSortInt module will arrange integer array element in accending order
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

bubIntMain = () => {
    console.log("Enter the size of an Array")
    var size = util.integerInput();

    var arr = util.arrayIntElementInput(size);

    var BubSortedArr = util.bubleSortInteger(arr);
    console.log("Sorted Array = "+BubSortedArr);
}
bubIntMain();
