var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

BinaryStrMain = () => {
    console.log("Enter the Size of an Array\n");
    var size = util.integerInput();

    var arr = util.arrayStrElementInput(size);
   
    console.log("Enter the Search Key in Array\n");
    var key = util.stringInput();

    util.binarySearchString(arr, key);
}
BinaryStrMain();