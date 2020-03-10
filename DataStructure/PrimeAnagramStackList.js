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
var util = require('../Utility/DSstackUsingList');
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
                        util.push(primeNum[i]);
                        util.push(primeNum[j]);
                    }    
                }
                else {
                    size += 100;
                    if(primeNum[j] < size) { 
                        util.push(primeNum[i]);
                        util.push(primeNum[j]);
                    }
                }
            }
        }
    }
    console.log("\nAnagram Prime Numbers List:\n"); 
    util.printStack();

    console.log("\nReverse List:\n");
    util.reverse();
    
}

PrimeAnagramStackListMain();
