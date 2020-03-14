/********************************************************************************************
*Execution    :  default node     cmd> node InsSortIntFile.js
*
*Purpose      :  To read external file and to sort the integer array and to arrange it in 
                 accending order.
*@description  
*
*@file        :  InsSortIntFile.js
*@overview    :  InsSortIntFile module will take an array from external file and will 
                 arrange integer array element in accending order.
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
insFileMain = () => {

    /**
    * @description Calling InsSortIntegerFile method from AlgorithmUtility File.
    */
    var InsSortedArr = util.InsSortIntegerFile();
    console.log('\nSorted Array from File:');
    
    /**
     * @description for loop to print sorted array one by one.
     */
    for(let i in InsSortedArr) {
        console.log(`${InsSortedArr[i]}`);
    }
}

insFileMain();
