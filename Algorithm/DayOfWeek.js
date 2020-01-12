var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

DayMain = () => {
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
DayMain();