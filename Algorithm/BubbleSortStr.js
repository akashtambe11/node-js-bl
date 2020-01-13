var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

bubStrMain = () => {
    console.log("Enter the size of an Array")
    var size = util.integerInput();

    var arr = util.arrayStrElementInput(size);

    var BubSortedArr = util.bubleSortString(arr);
    console.log("Sorted Array = "+BubSortedArr);
}
bubStrMain();


