/********************************************************************************************
*Execution    :  default node     cmd> node InventoryManagement.js
*
*Purpose      :  To store stock data of modified stock in json file.
*@description  
*
*@file        :  InventoryManagement.js
*@overview    :  InventoryManagement module is to modified stock data and store in json file.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/OopsInventoryManagementUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

/**
 * @description The main function is written to maintain inventory management data in json file.
 */
InventoryManagementMain = () => {

    /**
     * @description Condition must be reamin true until user exit from process.
     */
    while(true){
        console.log("\n1. Add new Stock. \n2. Delete Stock. \n3. Display. \n4. Exit");

        console.log("\nEnter your Choice");
        var choice = parseInt(algoUtil.integerInput());

        switch(choice){

            case 1:
                /**
                * @description Calling add method from OopsInventoryManagementUtility File.
                */
                util.add();
                break;
            
            case 2:
                /**
                * @description Calling delete method from OopsInventoryManagementUtility File.
                */
                util.delete();
                break;
    
            case 3:
                /**
                * @description Calling displayJsonData method from OopsInventoryManagementUtility File.
                */
                util.displayJsonData();
                break;
    
            case 4:
                return;
    
            default:
                console.log("Invalid Input (Range 1 -4 )");
                
        }
    }
 

}

InventoryManagementMain();

