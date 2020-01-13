/********************************************************************************************
*Execution    :  default node     cmd> node DayOfWeek.js
*
*Purpose      :  To find out exact day for specific user entered date.
*@description  
*
*@file        :  DayOfWeek.js
*@overview    :  DayOfWeek module will to deect the day for enterd date.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

dayMain = () => {
    console.log("Enter Date");
    var dateInput = util.integerInput();
    var d = parseInt(util.isRightDate(dateInput));

    console.log("\nEnter Month");
    var monthInput = util.integerInput();
    var m = parseInt(util.isRightMonth(monthInput));

    console.log("\nEnter Year");
    var yearInput = util.integerInput();
    var y = parseInt(util.isRighYear(yearInput));

    var day = util.dayOfWeek(d, m, y);

    var array = ['Sunday', 'Monday', 'Tuesday', 'WednesDay', 'Thursday', 'Friday', 'Saturday'];
    console.log(array[day]);
}
dayMain();