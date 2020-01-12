var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

InsStrMain = () => {
    console.log("Enter the size of an Array")
    var size = util.integerInput();

    var arr = util.arrayStrElementInput(size);

    var InsSortedArr = util.insertionSortString(arr);
    console.log("Sorted Array = "+InsSortedArr);
}
InsStrMain();
