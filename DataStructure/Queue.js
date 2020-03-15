/********************************************************************************************
*Execution    :  default node     cmd> node Queue.js
*
*Purpose      :  To perform Queue opertaion of Data structure.
*@description  
*
*@file        :  Queue.js
*@overview    :  Queue module is to perform various Queue operations.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSqueueUtility');
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to perform queue operations.
 */
queuMain = () => {

    /**
     * @description Condition must be reamin true until user exit from process.
     */
    while(true){
        console.log("\n1. Enqueue (Add Element in Queue)");
        console.log("2. Dequeue (Remove Element in Queue)");
        console.log("3. Data on Peek");
        console.log("4. Print Queue");
        console.log("5. LOG OUT ");

        console.log("\nEnter your choice");
        let choice = parseInt(algoUtil.integerInput());

        switch(choice){
            case 1:
                console.log("Enter Integer Element to Enqueue");
                let data = parseInt(algoUtil.integerInput());
                /**
                * @description Calling enqueue method from DSqueueUtility File.
                */
                util.enqueue(data);
                break;

            case 2:
                /**
                * @description Calling dequeue method from DSqueueUtility File.
                */
                util.dequeue();
                break;

            case 3:
                /**
                * @description Calling peek method from DSqueueUtility File.
                */
                util.peek();    
                
                break;

            case 4: 
            /**
                * @description Calling printQueue method from DSqueueUtility File.
                */
                util.printQueue();
                break;

            case 5:
                return;
            
            default:
                console.log("Invalid Input (Range 1 - 5)");
        } 
    }
    
} 

queuMain();