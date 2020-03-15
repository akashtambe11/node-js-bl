/********************************************************************************************
*Execution    :  default node     cmd> node StockLinklist.js
*
*Purpose      :  To store stock data of modified stock in json file using Linklist.
*@description  
*
*@file        :  StockLinklist.js
*@overview    :  StockLinklist module is to modified stock data and store in json file using
                 Linklist.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/OopsStockLinkListUtility');
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to handle stock account using LinkList.
 */
StockLinklistMain = () => {

    util.createList();

    /**
     * @description Condition must be reamin true until user exit from process.
     */
    while(true){
        console.log("\n1. Add new Stock. \n2. Delete Stock. \n3. Display. \n4. Write File \n5. Exit");

        console.log("\nEnter your Choice");
        var choice = parseInt(algoUtil.integerInput());

        switch(choice){

            case 1:
                /**
                * @description Calling add method from OopsStockLinkListUtility File.
                */
                util.add();
                break;
            
            case 2:
                /**
                * @description Calling delete method from OopsStockLinkListUtility File.
                */
                util.delete();
                break;
    
            case 3:
                /**
                * @description Calling displayJsonData method from OopsStockLinkListUtility File.
                */
                util.displayJsonData();
                break;
            
            case 4:
                /**
                * @description Calling writeToFile method from OopsStockLinkListUtility File.
                */
                util.writeToFile();
                break;

            case 5:
                return;
    
            default:
                console.log("Invalid Input (Range 1 -5)");
                
        }
    }
 

}

StockLinklistMain();