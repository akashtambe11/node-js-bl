/********************************************************************************************
*Execution    :  default node     cmd> node AnagramDetection.js
*
*Purpose      :  To determine the input string characters are balanced or not.
*@description  
*
*@file        :  BalencedParathesis.js
*@overview    :  BalencedParathesis module is to check weather input string get balanced.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSutility')
var read = require('readline-sync');

/**
 * @description The main function is written to check Anagram String.
 */
balancedParathesisMain = () => {
    
    var str = read.question("\nEnter string to check Balanced Parathesis\n");
   
    while(!(/^[()\[\]{}]*$/.test(str)) || str.length == 0){
        str = read.question("\nInvalid String Input (i.e. '{,},(,),[,]' ) \nEnter Again = ").trim();
    }

    /**
    * @description Calling balencePara method from DSutility File.
    */
    var check = util.balencePara(str);
    if (check == true)
        console.log("\nString parathesis are balenced");
        else
        console.log("\nString parathesis are NOT balenced");

}

balancedParathesisMain();