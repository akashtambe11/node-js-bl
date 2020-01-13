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