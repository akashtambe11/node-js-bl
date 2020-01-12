var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

BubIntMain = () => {
    console.log("Enter the size of an Array")
    var size = util.integerInput();

    var arr = util.arrayIntElementInput(size);

    var BubSortedArr = util.bubleSortInteger(arr);
    console.log("Sorted Array = "+BubSortedArr);
}
BubIntMain();
