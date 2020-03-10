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
var util = require('../Utility/DSdeQueueUtility');
var algoUtil = require('../Utility/AlgorithmUtility');

deQueueMain = () => {

    console.log("Enter the Size of an Array");
    var n =  parseInt(algoUtil.integerInput());

    
    
    while(true){
        console.log("1. Enqueue Front (Add Front Element in Queue)");
        console.log("2. Enqueue Rear  (Add Rear Element in Queue)");
        console.log("3. Dequeue Front (Remove Front Element in Queue)");
        console.log("4. Dequeue Rear  (Remove Rear Element in Queue)");
        console.log("5. Data on Front");
        console.log("6. Data on Rear");
        console.log("7. Print Queue");
        console.log("8. Exit ");

        console.log("\nEnter your choice");
        let choice = parseInt(algoUtil.integerInput());
        var data;

        switch(choice){
            case 1:
                console.log("Enter Element to Enqueue Front");
                data = algoUtil.stringInput();
                util.enqueFront(data, n);
                break;

            case 2:
                console.log("Enter Element to Enqueue Rear");
                data = algoUtil.stringInput();
                util.enqueRear(data, n);
                break;

            case 3:
                util.deQueueFront(n);
                break;

            case 4:
                util.deQueueRear(n);
                break;

            case 5:
                util.getFront(n);    
                break;

            case 6:
                util.getRear(n);    
               
                break;

            case 7: 
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