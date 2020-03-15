/********************************************************************************************
*Execution    :  default node     cmd> node StockAccount.js
*
*Purpose      :  To store stock data of modified personal stock and main stock in json file.
*@description  
*
*@file        :  StockAccount.js
*@overview    :  StockAccount module is to modified stock data of both personal stock and 
                 main stock and store in json file.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/OopsStockAccountUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

/**
 * @description The main function is written to handle stock account.
 */
StockAccountMain = () => {

    /**
     * @description Condition must be reamin true until user exit from process.
     */
    while(true){

        console.log("\n1. Display all Shares. \n2. Details of specific Shares. \n---------------------- \n3. Display My Shares \n4. Details of My Shares \n5. Purchase Shares.  \n6. Sell Shares \n7. LOG OUT");

        console.log("\nEnter your Choice");
        var choice = parseInt(algoUtil.integerInput());

        switch(choice){

            case 1:
                /**
                * @description Calling availableStock method from OopsStockAccountUtility File.
                */
                util.availableStock();
                break;
            
            case 2:
                /**
                * @description Calling stockDetails method from OopsStockAccountUtility File.
                */
                util.stockDetails();
                break;
            
            case 3:
                /**
                * @description Calling availableMyStock method from OopsStockAccountUtility File.
                */
                util.availableMyStock();
                break;

            case 4:
                /**
                * @description Calling stockMyDetails method from OopsStockAccountUtility File.
                */
                util.stockMyDetails();
                break;
            
            case 5:
                /**
                * @description Calling buyStock method from OopsStockAccountUtility File.
                */
                util.buyStock();
                break;

            case 6:
                /**
                * @description Calling sellStock method from OopsStockAccountUtility File.
                */
                util.sellStock();
                break;

            case 7:
                return;
    
            default:
                console.log("Invalid Input (Range 1 - 7)");     
        }
    }

}

StockAccountMain();


