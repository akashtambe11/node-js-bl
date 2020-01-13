var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

binaryIntMain = () => {
    console.log("Enter the Size of an Array\n");
    var size = util.integerInput();

    var arr = util.arrayIntElementInput(size);
    
    console.log("Enter the Search Key in Array\n");
    var key = util.stringInput();

    util.binarySearchInteger(arr, key);
}
binaryIntMain();
