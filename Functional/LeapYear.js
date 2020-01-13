/********************************************************************************************
*Execution    :  default node     cmd> node LeapYear.js
*
*Purpose      :  To determine wether input year is Leap or not.
*@description  
*
*@file        :  LeapYear.js
*@overview    :  isLeapYear module print statement wether the entered year by user is leap or
                 not.
                 in an array.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

leapYearMain = () => {
    
    console.log("Enter the Year");
    
    var year = algoUtil.integerInput();
    var yearAns = util.isLeapYear(year);
   

    if(yearAns){
        console.log(year + " is a Leap Year")
    }
    else{
        console.log(year + " is NOT a Leap Year")
    }
    
}
leapYearMain();