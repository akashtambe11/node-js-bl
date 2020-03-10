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
var util = require('../Utility/DSutility')
var read = require('readline-sync');

balancedParathesisMain = () => {
    
    var str = read.question("Enter string to check Balanced Parathesis\n");

    var check = util.balencePara(str);
    if (check == true)
        console.log("\nString parathesis are balenced");
        else
        console.log("\nString parathesis are NOT balenced");

}

balancedParathesisMain();