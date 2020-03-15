/********************************************************************************************
*Execution    :  default node     cmd> node PrimeTwoD.js
*
*Purpose      :  To find anagram number of prime range 0 - 1000 and store them in two 
                 dimention array
*@description  
*
*@file        :  PrimeTwoD.js
*@overview    :  prime2D module is to find prime number and store them in two dimention array.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSutility');
var algoUtil = require('../Utility/AlgorithmUtility')

/**
 * @description The main function is written to find anagram number from prime numbers.
 */
prime2D = () => {

    console.log("Enter the Range 0 - ? ");
    var getPrimeRange = algoUtil.integerInput();

    /**
    * @description Calling primeRange method from DSutility File to get Prime number 
    *              from input range.
    */
    var primeArr = util.primeRange(getPrimeRange);
    // console.log(primeArr);

    var finalArray = [[]];
    var i = 0; j = 0; size = 100;

    for(let k = 0; k < primeArr.length; k++){

        if(primeArr[k] <= size){
            finalArray[i][j] = primeArr[k];
            j++;
        }
       
        /**
         * @description If Range exceeds than 100
         */
        else{
            i = i + 1;
            j = 0;
            size = size + 100;

            finalArray[i] = [];
            /**
             * @description To store in predefined array. i.e. 2D Array
             */
            finalArray[i][j] = primeArr[k];

        }
    }
    //0-100, 100-200, ....., 900-1000 == 10 Parts
    // for(let m = 0; m < i+1; m++){
    //     console.log(finalArray[m]);  
    // }
    
    console.log(finalArray);  
}
prime2D();

