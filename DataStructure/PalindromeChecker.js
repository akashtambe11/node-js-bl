/********************************************************************************************
*Execution    :  default node     cmd> node PalindromeChecker.js
*
*Purpose      :  To check input string is palindrome or not.
*@description  
*
*@file        :  PalindromeChecker.js
*@overview    :  PalindromeChecker module is to perform palindrome operation on string.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSutility');
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to check entered string is palindrome or not.
 */
palindromeChecker = () => {

    console.log("\nEnter String to check Palindrome");
    
    var str = algoUtil.stringInput();
    var n = str.length;

    /**
    * @description Calling palindromeChecker method from DSutility File.
    */
    var result = util.palindromeChecker(str, n);

    if(result == true){
        console.log("\nEntered String is Palindrome");
    }
    else{
        console.log("\nEntered string is NOT Palindrome");
    }
        
}

palindromeChecker();