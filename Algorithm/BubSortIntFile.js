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
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

bubFileMain = () => {
    var sortedArr = util.bubSortIntegerFile();
    console.log(sortedArr);
}
bubFileMain();

