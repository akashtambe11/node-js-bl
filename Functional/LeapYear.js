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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

/**
 * @description The main function is written to entered Year is Leap or not.
 */
leapYearMain = () => {
    
    console.log("\nEnter the Year");
    
    var year = algoUtil.integerInput();

    /**
    * @description Calling isLeapYear method from FunctionalUtility File.
    */
    var yearAns = util.isLeapYear(year);
   
    if(yearAns){
        console.log("\n" +year+ " is a Leap Year")
    }
    else{
        console.log("\n" +year+ " is NOT a Leap Year")
    }
}

leapYearMain();