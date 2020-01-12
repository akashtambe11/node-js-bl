var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

BinFileMain = () => {
    console.log("Enter the name of Fruits\n");
    var name = util.stringInput();

    util.binSearchStringFile(name);
}
BinFileMain();
