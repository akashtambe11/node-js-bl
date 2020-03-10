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
var util = require('../Utility/DSutility');
var algoUtil = require('../Utility/AlgorithmUtility');

CalenderMain = () => {
    console.log("\nEnter Month");
    var monthInput = algoUtil.integerInput();
    var m = parseInt(algoUtil.isRightMonth(monthInput));

    console.log("\nEnter Year");
    var yearInput = algoUtil.integerInput();
    var y = parseInt(algoUtil.isRighYear(yearInput));

    util.calender(m,y);
}

CalenderMain();

