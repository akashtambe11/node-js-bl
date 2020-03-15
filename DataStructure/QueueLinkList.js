/********************************************************************************************
*Execution    :  default node     cmd> node QueueLinkList.js
*
*Purpose      :  To perform Queue opertaion of Data structure using Linklist.
*@description  
*
*@file        :  QueueLinkList.js
*@overview    :  QueueLinkList module is to perform various Queue operations using Linklist.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSqueueUsingList');
var algoUtil = require('../Utility/AlgorithmUtility'); 

/**
 * @description The main function is written to perform queue operations using Linklist.
 */
QueueListMain = () => {

    /**
     * @description Condition must be reamin true until user exit from process.
     */
    while(true){
        console.log("\n1. Enqueue (Add Element in Queue)");
        console.log("2. Dequeue (Remove Element in Queue)");
        console.log("3. Print Queue");
        console.log("4. LOG OUT");

        console.log("\nEnter your choice");
        let choice = parseInt(algoUtil.integerInput());

        switch(choice){
            case 1:
                console.log("\nEnter Integer Element to add in Queue");
                let data = parseInt(algoUtil.integerInput());
                 /**
                * @description Calling enqueue method from DSqueueUsingList File.
                */
                util.enqueue(data);
                break;

            case 2:
                /**
                * @description Calling dequeue method from DSqueueUsingList File.
                */
                util.dequeue();
                break;

            case 3: 
                /**
                * @description Calling printStack method from DSqueueUsingList File.
                */
                util.printStack();
                break;

            case 4:
                return;
            
            default:
                console.log("Invalid Input (Range 1 - 4)");
        }
        
    }
    

}

QueueListMain();