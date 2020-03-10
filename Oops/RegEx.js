/********************************************************************************************
*Execution    :  default node     cmd> node RegEx.js
*
*Purpose      :  To replace specific data from paragraph with valid information.
*@description  
*
*@file        :  RegEx.js
*@overview    :  RegEx module is to replace specific data of paragraph with user input 
                 valid data.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var util = require('../Utility/OopsUtility');
var read = require('readline-sync')
var algoUtil = require('../Utility/AlgorithmUtility')


ReqExMain = () => {

var para = "Hello <<name>>, We have your full name as <<full name>> in our system. Your contact number is +91-xxxxxxxxxx. Please,let us know in case of any clarification.Thank you BridgeLabz 01/01/2020.";

console.log("\nEnter your Name");
var name = algoUtil.stringInput();


var fullName = read.question('\nEnter your Full Name\n')
    while(!(/(\w.+\s).+/.test(fullName)) || fullName.length == 0){
        fullName = read.question("\nInvalid String Input (Enter Again) = ").trim();
    }

console.log('\nEnter your Mobile Number');
var mobileNo = algoUtil.integerInput();
    while(mobileNo.length != 10){
        console.log('Mobile number should have 10 Digit');
        var mobileNo = algoUtil.integerInput();
    }

util.regExApply(para, name, fullName, mobileNo);

}

ReqExMain();
