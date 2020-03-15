/********************************************************************************************
*Execution    :  default node     cmd> node PrimeAnagramTwoD.js
*
*Purpose      :  To find anagram number of prime range 0 - 1000 and store them in two 
                 dimention array
*@description  
*
*@file        :  PrimeAnagramTwoD.js
*@overview    :  PrimeAnagramTwoD module is to determin anagram numbers from the range of 
                 0 - 1000 of prime number and store them in two dimention array.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSutility');

/**
 * @description The main function is written to find anagram number from prime numbers.
 */
PrimeAnagramTwoDMain = () => {
    
    var primeNum = util.primeRange(1000);
    // console.log(primeNum);

    var array = [[]];
    var size = 100, index = 0, i, j, m;

    for(i = 0; i < primeNum.length-1; i++) {
        for(j = i+1; j < primeNum.length; j++) {
            
            /**
             * @description To check prime numbers are Anagram or Not
             */
            if(util.isAnagram(primeNum[i].toString(), primeNum[j].toString())) {
                if(primeNum[i] <= size) {
                    if(primeNum[j] <= size) {

                        /**
                        * @description pushing data in Array.
                        */
                        array[index].push(primeNum[i]);
                        array[index].push(primeNum[j]);
                    }    
                }
                else {
                    size += 100;
                    index++;
                    array[index] = [];
                    

                    if(primeNum[j] < size) { 
                        /**
                        * @description pushing data in Array.
                        */
                        array[index].push(primeNum[i]);
                        array[index].push(primeNum[j]);
                    }
                }
            }
        }
    }
    console.log("\nAnagram Prime Numbers In 2D Array:\n"); 
    console.log(array); 
}

PrimeAnagramTwoDMain();


