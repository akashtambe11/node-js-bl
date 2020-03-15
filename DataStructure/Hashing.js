/********************************************************************************************
*Execution    :  default node     cmd> node Hashing.js
*
*Purpose      :  To perform Hashing opertaion of Data structure.
*@description  
*
*@file        :  Hashing.js
*@overview    :  Hashing module is to perform various Hashing operations.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DShashingUtility');
var OLLutil = require('../Utility/DSorderedList')
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to perform hashing operations.
 */
hashTable = () => {
   
    /**
     * @description To create list of size 11.
     */
    for(let i = 0; i < 11; i++){
        OLLutil.insertAtLast(i);
    }

     /**
     * @description To take size
     */
    const size = OLLutil.getSize();
    console.log(size);
    
     /**
     * @description To add an empty array in LinkList.
     */
    for(let i = 0; i < size; i++){
        OLLutil[i] = [];
    }

    var textData = util.fileReadHash();

    console.log("\nText file contains following data : \n"+textData);

    /**
     * @description The map() - method creates a new array with the 
     *              results of calling a function for every array element.
     */
    var arrTextData = textData.split(" ").map(function(item) {
        return parseInt(item, 10);
    }); 
    // console.log(arrTextData);

       
        /**
         * @description To add an elements from text file to in array.
         */
        for(let i = 0; i < arrTextData.length; i++){
            util.add(arrTextData[i], OLLutil, size);
            
        }
     
    /**
     * @description Condition must be reamin true until user exit from process.
     */
     while(true)
     {
        console.log("\n*** Hashing DataStructure ***\n");
        
        console.log("1. Add");
        console.log("2. Remove");
        console.log("3. Print");
        console.log("4. Exit");
        
        let choice = parseInt(algoUtil.integerInput());

        switch(choice){
            case 1:
                console.log("\nEnter the value you want to add");
                let value =  parseInt(algoUtil.integerInput());
                /**
                * @description Calling add method from DShashingUtility File.
                */
                util.add(value, OLLutil, size);
                break;
            
            case 2:
                console.log("\nEnter the value you want to remove");
                let value1 =  parseInt(algoUtil.integerInput());
                /**
                * @description Calling remove method from DShashingUtility File.
                */
                util.remove(value1, OLLutil, size);
                break;
            
            case 3:
                /**
                * @description Calling print method from DShashingUtility File.
                */
                let result = util.print(OLLutil,size);
                break;
            
            case 4:
                return;

            default:
                console.log("Invalid Input (Range: 1 - 4)");
                break;
        
        }
    }
}

hashTable();