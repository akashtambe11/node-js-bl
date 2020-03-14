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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to find day of week.
 */
dayMain = () => {
    
    console.log("\nEnter Year");
    var yearInput = util.integerInput();
    
    /**
     * @description To ensure proper input of the Year.
     */
    var year = parseInt(util.isRighYear(yearInput));

    console.log("\nEnter Month");
    var monthInput = util.integerInput();

    /**
     * @description To ensure proper input of the Month.
     */
    var month = parseInt(util.isRightMonth(monthInput));
    
    console.log("\nEnter Date");

    var totalDays = [31,28,31,30,31,30,31,30,31,30,31,30];
    /**
     * @description To handle February month of Leap Year (If leap year found, totalDays become 29)
     */
        if(month == 2 && util.isLeapYear(year)) {
            totalDays[month-1] = 29;
        }

    var dateInput = util.integerInput();
    /**
     * @description To ensure proper input of the Day.
     */
    var day = parseInt(util.isRightDate(dateInput, totalDays[month-1]));
    
    /**
    * @description Calling dayOfWeek method from AlgorithmUtility File.
    */
    var dayName = util.dayOfWeek(day, month, year);

    var array = ['Sunday', 'Monday', 'Tuesday', 'WednesDay', 'Thursday', 'Friday', 'Saturday'];
    console.log(`\nDay on ${day}-${month}-${year}: ${array[dayName]}`);
}

dayMain();