/********************************************************************************************
*Execution    :  default node     cmd> node BubSortIntFile.js
*
*Purpose      :  To read external file and sort the integer array and to arrange it in 
                 accending order.
*@description  
*
*@file        :  BubSortIntFile.js
*@overview    :  BubSortIntFile module will arrange integer array element in accending order
                 from external file.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to bubble sort integer from and array of text file.
 */
bubFileMain = () => {

    /**
    * @description Calling bubSortIntegerFile method from AlgorithmUtility File.
    */
    var sortedArr = util.bubSortIntegerFile();
    console.log('\nSorted Array from File:');
    
    /**
     * @description for loop to print sorted array one by one.
     */
    for(let i in sortedArr) {
        console.log(`${sortedArr[i]}`);
    }
}

bubFileMain();

