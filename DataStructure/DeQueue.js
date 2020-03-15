/********************************************************************************************
*Execution    :  default node     cmd> node DeQueue.js
*
*Purpose      :  To perform de-queue opertaion of Data structure.
*@description  
*
*@file        :  DeQueue.js
*@overview    :  DeQueue module is to perform various de-queue operations.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSdeQueueUtility');
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to perform de-queue operations.
 */
deQueueMain = () => {

    console.log("\nEnter the Size of an Array");
    var n =  parseInt(algoUtil.integerInput());    
    /**
     * @description Condition must be reamin true until user exit from process.
     */
    while(true){
        console.log("\n1. Enqueue Front (Add Front Element in Queue)");
        console.log("2. Enqueue Rear  (Add Rear Element in Queue)");
        console.log("3. Dequeue Front (Remove Front Element in Queue)");
        console.log("4. Dequeue Rear  (Remove Rear Element in Queue)");
        console.log("5. Data on Front");
        console.log("6. Data on Rear");
        console.log("7. Print Queue");
        console.log("8. LOG OUT ");

        console.log("\nEnter your choice");
        let choice = parseInt(algoUtil.integerInput());
        var data;

        switch(choice){
            case 1:
                console.log("Enter String Element to Enqueue Front");
                data = algoUtil.stringInput();
                /**
                * @description Calling enqueFront method from DSdeQueueUtility File.
                */
                util.enqueFront(data, n);
                break;

            case 2:
                console.log("Enter String Element to Enqueue Rear");
                data = algoUtil.stringInput();
                /**
                * @description Calling enqueRear method from DSdeQueueUtility File.
                */
                util.enqueRear(data, n);
                break;

            case 3:
                /**
                * @description Calling deQueueFront method from DSdeQueueUtility File.
                */
                util.deQueueFront(n);
                break;

            case 4:
                /**
                * @description Calling deQueueRear method from DSdeQueueUtility File.
                */
                util.deQueueRear(n);
                break;

            case 5:
                /**
                * @description Calling getFront method from DSdeQueueUtility File.
                */
                util.getFront(n);    
                break;

            case 6:
                /**
                * @description Calling getRear method from DSdeQueueUtility File.
                */
                util.getRear(n);    
               
                break;

            case 7:
                /**
                * @description Calling printQueue method from DSdeQueueUtility File.
                */
                util.printQueue(n);
                break;

            case 8:
                return;
            
            default:
                console.log("Invalid Input (Range 1 - 8)");
        } 
    }  

} 

deQueueMain();