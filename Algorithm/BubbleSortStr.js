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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to bubble sort string from and array.
 */
bubStrMain = () => {
    console.log("\nEnter the size of an Array");
    var size = util.integerInput();

    /**
    * @description Calling arrayStrElementInput method from AlgorithmUtility File to take 
    *              string as input.             
    */
    var arr = util.arrayStrElementInput(size);

    /**
    * @description Calling bubleSortString method from AlgorithmUtility File.
    */
    var BubSortedArr = util.bubleSortString(arr);
    console.log("\nSorted Array = "+BubSortedArr);
}

bubStrMain();


