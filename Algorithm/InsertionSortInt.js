var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

insIntMain = () => {
    console.log("Enter the size of an Array")
    var size = util.integerInput();

    var arr = util.arrayIntElementInput(size);

    var InsSortedArr = util.insertionSortInteger(arr);
    console.log("Sorted Array = "+InsSortedArr);
}
insIntMain();
