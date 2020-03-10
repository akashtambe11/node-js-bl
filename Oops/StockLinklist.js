/********************************************************************************************
*Execution    :  default node     cmd> node Inventory.js
*
*Purpose      :  To store stock data of modified stock in json file using Linklist.
*@description  
*
*@file        :  Inventory.js
*@overview    :  Inventory module is to modified stock data and store in json file using
                 Linklist.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var util = require('../Utility/OopsStockLinkListUtility');
var algoUtil = require('../Utility/AlgorithmUtility');


StockLinklistMain = () => {

    util.createList();

    while(true){
        console.log("\n1. Add new Stock. \n2. Delete Stock. \n3. Display. \n4. Write File \n5. Exit");

        console.log("\nEnter your Choice");
        var choice = parseInt(algoUtil.integerInput());

        switch(choice){

            case 1:
                util.add();
                break;
            
            case 2:
                util.delete();
                break;
    
            case 3:
                util.displayJsonData();
                break;
            
            case 4:
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