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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');


/**
 * @description The main function is written to perform integer insertion sort on an array.
 */
insIntMain = () => {
    console.log("\nEnter the size of an Array")
    var size = util.integerInput();

    /**
    * @description Calling arrayIntElementInput method from AlgorithmUtility File to take
    *              input as integer.
    */
    var arr = util.arrayIntElementInput(size);

    /**
    * @description Calling insertionSortInteger method from AlgorithmUtility File.
    */
    var InsSortedArr = util.insertionSortInteger(arr);
    console.log("\nSorted Array = "+InsSortedArr);
}

insIntMain();
