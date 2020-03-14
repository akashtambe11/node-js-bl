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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to find three number whoes sum is zero.
 */
sumOfThreeMain = () => {
    
    console.log("Enter the Size of an Array");
    var size = algoUtil.integerInput();
    while(size < 3){
        console.log("Invalid Size = (size >= 3) ");
        var size = algoUtil.integerInput();
    }

     /**
    * @description Calling arrayIntElementInput method from AlgorithmUtility File to take 
    *              integers as input.             
    */
    var arr = algoUtil.arrayIntElementInput(size);

    /**
    * @description Calling sumOfThreeIntZero method from FunctionalUtility File.
    */
    var numbers = util.sumOfThreeIntZero(arr, size);
    if(numbers == false){
        console.log("Sum of three integer is not Zero");
        
    }else{
        console.log("Three Elements are = "+numbers[0]+", "+numbers[1]+", "+numbers[2]);
    }   
}

sumOfThreeMain();
