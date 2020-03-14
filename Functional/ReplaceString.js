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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to replace the string from original string.
 */
replaceStrMain = () => {
    var str = "\nHello '<<UserName>>', How are you?";
    console.log(str);

    console.log("\nEnter your Username")
    var name = algoUtil.stringInput();

    /**
    * @description Calling replaceString method from FunctionalUtility File.
    */
    var newString = util.replaceString(str, name);
    console.log("\n"+newString);
}

replaceStrMain();
