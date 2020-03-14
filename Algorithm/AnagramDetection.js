/********************************************************************************************
*Execution    :  default node     cmd> node AnagramDetection.js
*
*Purpose      :  To determine the input two strings are anagram or not.
*@description  
*
*@file        :  AnagramDetection.js
*@overview    :  AnagramDetection module is to check both strings are anagram or not.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to check Anagram String.
 */
anagramMain = () => {

    console.log("\nAnagram Example: (listen, silent) \n\nEnter String 1 =");
    var str1 = util.stringInput();

    console.log("\nEnter String 2 =");
    var str2 = util.stringInput();
    
    /**
    * @description Calling isAnagram method from AlgorithmUtility File.
    */
    var ansCheck = util.isAnagram(str1, str2);
    
    if(ansCheck == true){
        console.log("\nEnterd two Strings are Anagram");
    }else{
        console.log("\nTwo Strings are NOT Anagram");
    }
}
anagramMain();