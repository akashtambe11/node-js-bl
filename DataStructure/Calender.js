/********************************************************************************************
*Execution    :  default node     cmd> node Calender.js
*
*Purpose      :  To draw the calender with month view for user input month and year.
*@description  
*
*@file        :  Calender.js
*@overview    :  Calender module is to draw month view of calender.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSutility');
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to draw month view of calender.
 */
CalenderMain = () => {
    console.log("\nEnter Month");
    var monthInput = algoUtil.integerInput();
    var m = parseInt(algoUtil.isRightMonth(monthInput));

    console.log("\nEnter Year");
    var yearInput = algoUtil.integerInput();
    var y = parseInt(algoUtil.isRighYear(yearInput));

    /**
    * @description Calling calender method from DSutility File.
    */
    util.calender(m,y);
}

CalenderMain();

