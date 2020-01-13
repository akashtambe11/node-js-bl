var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility');

sumOfThreeMain = () => {
    
    console.log("Enter the Size of an Array");
    var size = algoUtil.integerInput();

    var arr = algoUtil.arrayIntElementInput(size);
    var numbers = util.sumOfThreeIntZero(arr, size);
   
    console.log("Three Elements are = "+numbers[0]+", "+numbers[1]+", "+numbers[2]);
}
sumOfThreeMain();
