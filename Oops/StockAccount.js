var util = require('../Utility/OopsUtility');
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
                console.log("Invalid Input (Range 1 - 5)");
                
        }
    }
 

}

StockAccountMain();


