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

