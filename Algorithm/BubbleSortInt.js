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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to bubble sort integer from and array.
 */
bubIntMain = () => {
    console.log("\nEnter the size of an Array");
    var size = util.integerInput();

    /**
    * @description Calling arrayIntElementInput method from AlgorithmUtility File to take 
    *              integers as input.             
    */
    var arr = util.arrayIntElementInput(size);

    /**
    * @description Calling bubleSortInteger method from AlgorithmUtility File.
    */
    var BubSortedArr = util.bubleSortInteger(arr);
    console.log("\nSorted Array = "+BubSortedArr);
}

bubIntMain();
