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
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

insFileMain = () => {
var InsSortedArr = util.InsSortIntegerFile();
console.log(InsSortedArr);
}

insFileMain();
