/********************************************************************************************
*Execution    :  default node     cmd> node ReplaceString.js
*
*Purpose      :  To change the user name to user entered string.
*@description  
*
*@file        :  ReplaceString.js
*@overview    :  replaceString module replace the word in old string with new user entered
                 string and print the same old string sentence.
                 in an array.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
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
