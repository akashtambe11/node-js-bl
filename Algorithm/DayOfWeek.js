var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

var dateInput = read.question("Enter Date\n");
var d = parseInt(util.isRightDate(dateInput));

var monthInput = read.question("Enter Month\n");
var m = parseInt(util.isRightMonth(monthInput));

var yearInput = read.question("Enter Year\n");
var y = parseInt(util.isRighYear(yearInput));

var day = util.dayOfWeek(d, m, y);

var array = ['Sunday', 'Monday', 'Tuesday', 'WednesDay', 'Thursday', 'Friday', 'Saturday'];
console.log(array[day]);