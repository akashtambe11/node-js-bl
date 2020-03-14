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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to perform string merge sort on an array.
 */
mergeStrMain = () => {
    console.log("\nEnter the size of an Array")
    var size = util.integerInput();

    /**
    * @description Calling arrayStrElementInput method from AlgorithmUtility File to take
    *              input as string.
    */
    var arr = util.arrayStrElementInput(size);

     /**
    * @description Calling mergeSortString method from AlgorithmUtility File.
    */
    var mergeSortedArr = util.mergeSortString(arr);
    console.log("\nSorted Array = "+mergeSortedArr);
}

mergeStrMain();