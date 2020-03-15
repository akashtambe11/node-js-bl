/********************************************************************************************
*Execution    :  default node     cmd> node PrimeAnagramStackList.js
*
*Purpose      :  To find anagram number from the prime number range of 0 - 1000 using stack 
                 Data Structure.
*@description  
*
*@file        :  PrimeAnagramStackList.js
*@overview    :  PrimeAnagramStackList module is to perform anagram operation on prime numbers
                 using stack data structure.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSstackUsingList');
var DsUtil = require('../Utility/DSutility');

/**
 * @description The main function is written to find anagram number from prime numbers.
 */
PrimeAnagramStackListMain = () => {
    
    var primeNum = DsUtil.primeRange(1000);
    // console.log(primeNum);

    var size = 100;

    for(let i = 0; i < primeNum.length-1; i++) {
        for(let j = i+1; j < primeNum.length; j++) {
            
             /**
             * @description To check prime numbers are Anagram or Not
             */
            if(DsUtil.isAnagram(primeNum[i].toString(), primeNum[j].toString())) {
                if(primeNum[i] <= size) {
                    if(primeNum[j] <= size) {

                        /**
                        * @description pushing data in Array.
                        */
                        util.push(primeNum[i]);
                        util.push(primeNum[j]);
                    }    
                }
                else {
                    size += 100;
                    if(primeNum[j] < size) { 

                        /**
                        * @description pushing data in Array.
                        */
                        util.push(primeNum[i]);
                        util.push(primeNum[j]);
                    }
                }
            }
        }
    }
    console.log("\nAnagram Prime Numbers List:"); 
    util.printStack();

    console.log("\nReverse List:");
    /**
     * @description To reverse the list
     */
    util.reverse();
    
}

PrimeAnagramStackListMain();
