var fs = require('fs');
var algoUtil = require('../Utility/AlgorithmUtility')
var stockAcc = require('../Oops/StockAccount')

module.exports = {

    regExApply(para, name, fullName, mobileNo){
       
        var nameRe = /^[a-zA-Z]+$/;
        var fNameRe = /(\w.+\s).+/;
        var MobRe = /^([+]\d{2}[ ])?\d{10}$/;

        var checkName = nameRe.test(name);
        if(checkName == true){
            para = para.replace('<<name>>', name);
        }

        var checkFullName = fNameRe.test(fullName);
        if(checkFullName == true){
            para = para.replace('<<full name>>', fullName);
        }

        var checkmob = MobRe.test(mobileNo);
        if(checkmob == true){
            para = para.replace('xxxxxxxxxx', mobileNo);
        }

        console.log(para);
        
    },

//***************************************************************************************************** */

    invData(){
        var jsonData = fs.readFileSync(__dirname + "/JsonFiles/Inventory.json");

        var inventory = JSON.parse(jsonData);
        // console.log(inventory);
    
        console.log("\n1. Rice \n2. Pulses \n3. Wheat \n4. Exit");
        console.log("\nEnter your choice");


        var choice = parseInt(algoUtil.integerInput());
        
        switch(choice){
            case 1:
                console.log("\nEnter weight (kg) to purchase Rice");
                var weight = parseInt(algoUtil.integerInput());

                for(let i = 0; i < inventory.Rice.length; i++){
                    console.log("\nRice: " +inventory.Rice[i].name+ " \tPrice per Kg: " +inventory.Rice[i].price+ " Rs.\nCost for " +weight+ " Kg = " +weight * inventory.Rice[i].price+ " Rs.\n");
                }
                break;


            case 2:
                console.log("\nEnter weight (kg) to purchase Pulses");
                var weight = parseInt(algoUtil.integerInput());

                for(let i = 0; i < inventory.Pulses.length; i++){
                    console.log("\nPulses: " +inventory.Pulses[i].name+ " \tPrice per Kg: " +inventory.Pulses[i].price+ " \nCost for " +weight+ " Kg = " +weight * inventory.Pulses[i].price+ " Rs.\n");
                }
                break;


            case 3:
                console.log("\nEnter weight (kg) to purchase Wheat");
                var weight = parseInt(algoUtil.integerInput());

                for(let i = 0; i < inventory.Wheat.length; i++){
                    console.log("\Wheat: " +inventory.Wheat[i].name+ " \tPrice per Kg: " +inventory.Wheat[i].price+ " \nCost for " +weight+ " Kg = " +weight * inventory.Wheat[i].price+ " Rs.\n");
                }
                break;

            case 4:
                return;

            default:
                console.log("Invalid Input (Range 1 - 4)");

        }


    }
}


//***************************************************************************************************** */

class InventoryManagement{
    constructor(){
        var jsonData = fs.readFileSync(__dirname + "/JsonFiles/InventoryManage.json");
        this.data = JSON.parse(jsonData);
        
    }  

    displayJsonData(){
        console.log(this.data);
    }


    add(){

        console.log("Enter name of Stock");
        var name = algoUtil.stringInput();

        console.log("Enter no. of Shares");;
        var share = algoUtil.integerInput();

        console.log("Enter Price");
        var price = algoUtil.integerInput();
        
        this.data.stock.push({
            "stockName": name,
            "shares": share,
            "price": price
        })

        fs.writeFileSync(__dirname + "/JsonFiles/InventoryManage.json", JSON.stringify(this.data));
    }


    delete(){

        this.displayJsonData();
        console.log("Enter Stock Name to be removed");
        var name = algoUtil.stringInput();

        for(let i = 0; i < this.data.stock.length; i++){
            if(this.data.stock[i].stockName.toLowerCase() == name.toLowerCase()){
                var index = this.data.stock.indexOf(this.data.stock[i]);
                this.data.stock.splice(index, 1);
            }
        }

        fs.writeFileSync(__dirname + "/JsonFiles/InventoryManage.json", JSON.stringify(this.data));
    }
    
}

module.exports = new InventoryManagement();


//***************************************************************************************************** */


class Stock{

    constructor(){

        var jsonData = fs.readFileSync(__dirname + "/JsonFiles/StockData.json");
        this.data = JSON.parse(jsonData);


        var MyJsonData = fs.readFileSync(__dirname + "/JsonFiles/MyStockData.json");
        this.MyData = JSON.parse(MyJsonData);

        var size = this.data.stock.length;
        console.log(size);
    }

    
    availableStock(){

        console.log("\nAvailable Stock Names are:");
        this.displayStockName();  
    }


    stockDetails(){
        
        this.availableStock();
        console.log("Select the Stock number for details");
        var size = this.data.stock.length;

        var choice = parseInt(algoUtil.integerInput());

        while(choice <= 0 || choice >= (size+1)){
            console.log(`\nInvalid Selection Range (1 - ${size}) \n(Enter Again)`);
            var choice = parseInt(algoUtil.integerInput());
        }

        this.displayStockDetails(choice-1)
    }

    displayStockDetails(choice){
        console.log("\nStock Name      : "+this.data.stock[choice].stockName
                   +"\nNumber of Shares: "+this.data.stock[choice].shares
                   +"\nStock Price     : "+this.data.stock[choice].price
                   );
    }


    //------------For Buying and Main purpose
    buyStock(){
        console.log("\n******* BUYING SHARES *******");
        
        this.availableStock();
        console.log("\nSelect the Stock number to Buy Stock");
        var size = this.data.stock.length;

        var choice = parseInt(algoUtil.integerInput());

        while(choice <= 0 || choice >= (size+1)){
            console.log(`\nInvalid Selection Range (1 - ${size}) \n(Enter Again)`);
            var choice = parseInt(algoUtil.integerInput());
        }

        var shareQty = parseInt(this.data.stock[choice-1].shares);
        console.log("Available Shares are: "+shareQty);


        //----Purchasing Qty of shares
        console.log(`\nEnter Quantity of ${this.data.stock[choice-1].stockName}'s Shares you required`);
        var buyShares = parseInt(algoUtil.integerInput());

        while(buyShares <= 0 || buyShares >= (shareQty+1)){
            console.log(`\nInvalid Selection Range (1 - ${shareQty}) \n(Enter Again)`);
            var buyShares = parseInt(algoUtil.integerInput());
        }


        //-----Adding purchased stock to MyStockData
        let totalAmount = this.shareCalculation(choice-1, buyShares);
        console.log("\nTotal Purchase Amount = "+totalAmount+" Rs.\n");
        
        console.log("Do you want Purches? \n(Enter [1 = Yes] OR [2 = No])");
        var confirmation = parseInt(algoUtil.integerInput());
     

        while(confirmation <= 0 || confirmation >= 3){
            console.log(`\nInvalid Input \n(Enter 1 or 2)`);
            var confirmation = parseInt(algoUtil.integerInput());
        }

            if(confirmation == 1){
            
            //----Writing MyStockData
                //If Already same Stock is Available
                if(this.checkMyShareNameAvailability(choice-1) == true){
                    for(let i = 0; i < this.MyData.stock.length; i++){
                        if(this.data.stock[choice-1].stockName == this.MyData.stock[i].stockName){
                            this.MyData.stock[i].shares += buyShares; 
                        
                            fs.writeFileSync(__dirname + "/JsonFiles/MyStockData.json", JSON.stringify(this.MyData));
                        }
                        
                    }
                    
                }
                else{
                    this.MyData.stock.push({
                        "stockName": this.data.stock[choice-1].stockName,
                        "shares": buyShares,
                        "price": this.data.stock[choice-1].price
                    })

                    fs.writeFileSync(__dirname + "/JsonFiles/MyStockData.json", JSON.stringify(this.MyData));
                }
                
            //----Writing StockData
            let updatedShare = this.data.stock[choice-1].shares - buyShares; 
            
            this.data.stock[choice-1].shares = updatedShare;
            fs.writeFileSync(__dirname + "/JsonFiles/StockData.json", JSON.stringify(this.data));
            
            }
            else{
                return;
            }   
    }

    
    displayStockName(){

        for(let i = 0; i < this.data.stock.length; i++){
            console.log((i+1)+". "+this.data.stock[i].stockName);
            
        }
    }


    shareCalculation(ch, buyShares){
        return this.data.stock[ch].price * buyShares;
    }


    checkMyShareNameAvailability(ch){
        let found = false;
        for(let i = 0; i < this.MyData.stock.length; i++){
            if(this.data.stock[ch].stockName == this.MyData.stock[i].stockName){
                found = true;
            }
        }

        if(found == true)
            return true;
        else
            return false;
    }






    //-----------For Selling purpose
    availableMyStock(){

        console.log("\nAvailable Stock Names are:");
        this.displaySellStockName();  
    }
    stockMyDetails(){
        
        this.availableMyStock();
        console.log("Select the Stock number for details");
        var size = this.MyData.stock.length;

        var choice = parseInt(algoUtil.integerInput());

        while(choice <= 0 || choice >= (size+1)){
            console.log(`\nInvalid Selection Range (1 - ${size}) \n(Enter Again)`);
            var choice = parseInt(algoUtil.integerInput());
        }

        this.displayMyStockDetails(choice-1)
    }

    displayMyStockDetails(choice){
        console.log("\nStock Name      : "+this.MyData.stock[choice].stockName
                   +"\nNumber of Shares: "+this.MyData.stock[choice].shares
                   +"\nStock Price     : "+this.MyData.stock[choice].price
                   );
    }



    sellStock(){
        console.log("\n******* SELLING SHARES *******");
        this.availableMyStock();
        console.log("\nSelect the Stock number to Sell Stock");
        var size = this.MyData.stock.length;

        var choice = parseInt(algoUtil.integerInput());

        while(choice <= 0 || choice >= (size+1)){
            console.log(`\nInvalid Selection Range (1 - ${size}) \n(Enter Again)`);
            var choice = parseInt(algoUtil.integerInput());
        }

        var shareQty = parseInt(this.MyData.stock[choice-1].shares);
        console.log("Available Shares in your Account are: "+shareQty);


        //----Selling Qty of shares
        console.log(`\nEnter Quantity of ${this.MyData.stock[choice-1].stockName}'s Shares you want to Sell`);
        var sellShares = parseInt(algoUtil.integerInput());

        while(sellShares <= 0 || sellShares >= (shareQty+1)){
            console.log(`\nInvalid Selection Range (1 - ${shareQty}) \n(Enter Again)`);
            var sellShares = parseInt(algoUtil.integerInput());
        }


        //-----Adding Sell stock to StockData
        let totalAmount = this.shareSellCalculation(choice-1, sellShares);
        console.log("\nTotal Selling Amount = "+totalAmount+" Rs.\n");
        
        console.log("Do you want Sell? \n(Enter [1 = Yes] OR [2 = No])");
        var confirmation = parseInt(algoUtil.integerInput());
     

        while(confirmation <= 0 || confirmation >= 3){
            console.log(`\nInvalid Input \n(Enter 1 or 2)`);
            var confirmation = parseInt(algoUtil.integerInput());
        }

            if(confirmation == 1){
            
            //----Writing StockData
                //If Already same Stock is Available
                if(this.checkShareNameAvailability(choice-1) == true){
                    for(let i = 0; i < this.data.stock.length; i++){
                        if(this.data.stock[i].stockName == this.MyData.stock[choice-1].stockName){
                            this.data.stock[i].shares += sellShares; 
                        }
                        fs.writeFileSync(__dirname + "/JsonFiles/StockData.json", JSON.stringify(this.data));
                    }
                    
                }
                else{
                    this.data.stock.push({
                        "stockName": this.MyData.stock[choice-1].stockName,
                        "shares": sellShares,
                        "price": this.MyData.stock[choice-1].price
                    })

                    fs.writeFileSync(__dirname + "/JsonFiles/StockData.json", JSON.stringify(this.data));
                }
                
            //----Writing MyStockData
            let updatedShare = this.MyData.stock[choice-1].shares - sellShares; 
            
            this.MyData.stock[choice-1].shares = updatedShare;
            fs.writeFileSync(__dirname + "/JsonFiles/MyStockData.json", JSON.stringify(this.MyData));
            
            }
            else{
                return;
            }   
    }

   

    displaySellStockName(){

        for(let i = 0; i < this.MyData.stock.length; i++){
            console.log((i+1)+". "+this.MyData.stock[i].stockName);
            
        }
    }

    shareSellCalculation(ch, sellShares){
        return this.MyData.stock[ch].price * sellShares;
    }

    checkShareNameAvailability(ch){
        let found = false;
        for(let i = 0; i < this.data.stock.length; i++){
            if(this.data.stock[i].stockName == this.MyData.stock[ch].stockName){
                found = true;
            }
        }

        if(found == true)
            return true;
        else
            return false;
    }

  

   


}
module.exports = new Stock();