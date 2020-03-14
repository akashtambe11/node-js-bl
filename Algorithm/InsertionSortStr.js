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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to perform string insertion sort on an array.
 */
insStrMain = () => {
    console.log("\nEnter the size of an Array")
    var size = util.integerInput();

    /**
    * @description Calling arrayStrElementInput method from AlgorithmUtility File to take
    *              string as integer.
    */
    var arr = util.arrayStrElementInput(size);

    /**
    * @description Calling insertionSortString method from AlgorithmUtility File.
    */
    var InsSortedArr = util.insertionSortString(arr);
    console.log("\nSorted Array = "+InsSortedArr);
}

insStrMain();
