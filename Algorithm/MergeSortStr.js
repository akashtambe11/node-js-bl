var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

mergeStrMain = () => {
    console.log("Enter the size of an Array")
    var size = util.integerInput();

    var arr = util.arrayStrElementInput(size);
    console.log("===>"+arr)
    var mergeSortedArr = util.mergeSortString(arr);
    console.log("Sorted Array = "+mergeSortedArr);
}
mergeStrMain();