var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility');

replaceStrMain = () => {
    var str = "Hello '<<UserName>>', How are you?";
    console.log(str);

    console.log("\nEnter your Username")
    var name = algoUtil.stringInput();
    var newString = util.replaceString(str, name);
    console.log("\n"+newString);
}
replaceStrMain();
