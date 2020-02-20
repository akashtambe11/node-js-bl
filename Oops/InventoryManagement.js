var util = require('../Utility/OopsUtility');
var algoUtil = require('../Utility/AlgorithmUtility')


InventoryManagementMain = () => {

    while(true){
        console.log("\n1. Add new Stock. \n2. Delete Stock. \n3. Display. \n4. Exit");

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
                return;
    
            default:
                console.log("Invalid Input (Range 1 -4 )");
                
        }
    }
 

}

InventoryManagementMain();

