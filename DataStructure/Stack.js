/********************************************************************************************
*Execution    :  default node     cmd> node Stack.js
*
*Purpose      :  To perform Stack opertaion of Data structure.
*@description  
*
*@file        :  Stack.js
*@overview    :  Stack module is to perform various Stack operations.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSStackUtility');
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to perform stack operations.
 */
stackMain = () => {

    /**
     * @description Condition must be reamin true until user exit from process.
     */
    while(true){
        console.log("\n1. Push (Add Element in Stack)");
        console.log("2. Pop  (Remove Element in Stack)");
        console.log("3. Data on Peek");
        console.log("4. Print Stack");
        console.log("5. LOG OUT ");

        console.log("\nEnter your choice");
        let choice = parseInt(algoUtil.integerInput());

        switch(choice){
            case 1:
                console.log("\nEnter Integer Element to push in Stack");
                let data = parseInt(algoUtil.integerInput());
                /**
                * @description Calling push method from DSStackUtility File.
                */
                util.push(data);
                break;

            case 2:
                /**
                * @description Calling pop method from DSStackUtility File.
                */
                util.pop();
                break;

            case 3:
                /**
                * @description Calling peek method from DSStackUtility File.
                */
                var peekData = util.peek();    
                console.log("Data on peek = "+peekData)
                break;

            case 4: 
                /**
                * @description Calling printStack method from DSStackUtility File.
                */
                util.printStack();
                break;

            case 5:
                return;
            
            default:
                console.log("Invalid Input (Range 1 - 5)");
        }
        
    }
    

}

stackMain();