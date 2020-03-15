/********************************************************************************************
*Execution    :  default node     cmd> node StackLinkList.js
*
*Purpose      :  To perform Stack opertaion of Data structure using Linklist.
*@description  
*
*@file        :  StackLinkList.js
*@overview    :  StackLinkList module is to perform various Stack operations using Linklist.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSstackUsingList');
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to perform stack operations using Linklist.
 */
stackListMain = () => {

    /**
     * @description Condition must be reamin true until user exit from process.
     */
    while(true){
        console.log("\n1. Push (Add Element in Stack)");
        console.log("2. Pop (Remove Element in Stack)");
        console.log("3. Data on Peek");
        console.log("4. Reverse the Stack");
        console.log("5. Print Stack");
        console.log("6. LOG OUT ");

        console.log("\nEnter your choice");
        let choice = parseInt(algoUtil.integerInput());

        switch(choice){
            case 1:
                console.log("\nEnter Element to push in Stack");
                let data = parseInt(algoUtil.integerInput());
                /**
                * @description Calling push method from DSstackUsingList File.
                */
                util.push(data);
                break;

            case 2:
                /**
                * @description Calling pop method from DSstackUsingList File.
                */
                util.pop();
                break;

            case 3:
                /**
                * @description Calling peek method from DSstackUsingList File.
                */
                util.peek();
                break;

            case 4:
                /**
                * @description Calling reverse method from DSstackUsingList File.
                */
                util.reverse();    
                break;

            case 5:
                /**
                * @description Calling printStack method from DSstackUsingList File.
                */
                util.printStack();
                break;

            case 6:
                return;
            
            default:
                console.log("\nInvalid Input (Range 1 - 6)");
        }   
    }

}

stackListMain();