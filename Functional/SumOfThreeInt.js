/********************************************************************************************
*Execution    :  default node     cmd> node SumOfThreeInt.js
*
*Purpose      :  To identify which three numbers in array's elements addition is zero.
*@description  
*
*@file        :  SumOfThreeInt.js
*@overview    :  sumOfThreeIntZero module will find addition of which three numbers is zero &
                 will print those three numbers.
                 in an array.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility');

sumOfThreeMain = () => {
    
    console.log("Enter the Size of an Array");
    var size = algoUtil.integerInput();
    while(size < 3){
        console.log("Invalid Size = (size >= 3) ");
        var size = algoUtil.integerInput();
    }

    var arr = algoUtil.arrayIntElementInput(size);
    var numbers = util.sumOfThreeIntZero(arr, size);
    if(numbers == false){
        console.log("Sum of three integer is not Zero");
        
    }else{
        console.log("Three Elements are = "+numbers[0]+", "+numbers[1]+", "+numbers[2]);
    }
       
}
sumOfThreeMain();
