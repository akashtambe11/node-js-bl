/********************************************************************************************
*Execution    :  default node     cmd> node PrimeAnagramQueue.js
*
*Purpose      :  To find anagram number from the prime number range of 0 - 1000 using queue 
                 Data Structure.
*@description  
*
*@file        :  PrimeAnagramQueue.js
*@overview    :  PrimeAnagramQueue module is to perform anagram operation on prime numbers
                 using queue data structure.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var util = require('../Utility/DSqueueUsingList');
var DsUtil = require('../Utility/DSutility');


PrimeAnagramStackListMain = () => {
    
    var primeNum = DsUtil.primeRange(1000);
    // console.log(primeNum);

    var size = 100;

    for(let i = 0; i < primeNum.length-1; i++) {
        for(let j = i+1; j < primeNum.length; j++) {
            //To check prime numbers are Anagram or Not
            if(DsUtil.isAnagram(primeNum[i].toString(), primeNum[j].toString())) {
                if(primeNum[i] <= size) {
                    if(primeNum[j] <= size) {
                        util.enqueue(primeNum[i]);
                        util.enqueue(primeNum[j]);
                    }    
                }
                else {
                    size += 100;
                    if(primeNum[j] < size) { 
                        util.enqueue(primeNum[i]);
                        util.enqueue(primeNum[j]);
                    }
                }
            }
        }
    }
    console.log("\nAnagram Prime Numbers List:\n"); 
    util.printStack();

    
}

PrimeAnagramStackListMain();
