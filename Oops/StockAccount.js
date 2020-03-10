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
var util = require('../Utility/OopsStockAccountUtility');
var algoUtil = require('../Utility/AlgorithmUtility')


StockAccountMain = () => {

    while(true){

        console.log("\n1. Display all Shares. \n2. Details of specific Shares. \n---------------------- \n3. Display My Shares \n4. Details of My Shares \n5. Purchase Shares.  \n6. Sell Shares \n7. LOG OUT");

        console.log("\nEnter your Choice");
        var choice = parseInt(algoUtil.integerInput());

        switch(choice){

            case 1:
                util.availableStock();
                break;
            
            case 2:
                util.stockDetails();
                break;
            
            case 3:
                util.availableMyStock();
                break;

            case 4:
                util.stockMyDetails();
                break;
            
            case 5:
                util.buyStock();
                break;

            case 6:
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


