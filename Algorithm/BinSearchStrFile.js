var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

binFileMain = () => {
    console.log("Enter the name of Fruits\n");
    var name = util.stringInput();

    util.binSearchStringFile(name);
}
binFileMain();
