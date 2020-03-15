/**
 * @description Dependencies are required to be install before execution of this file.
 */
var fs = require('fs');
var algoUtil = require('../Utility/AlgorithmUtility')

/**
 * @class Stock to read Json File.
 */
class Stock{

    constructor(){

        /**
         * @description to read json files.
         */
        var jsonData = fs.readFileSync(__dirname + "/JsonFiles/StockData.json");
        this.data = JSON.parse(jsonData);


        var MyJsonData = fs.readFileSync(__dirname + "/JsonFiles/MyStockData.json");
        this.MyData = JSON.parse(MyJsonData);

        var size = this.data.stock.length;
        console.log(size);
    }

    /**
    * @method availableStock() - To display available stocks.
    */
    availableStock(){

        console.log("\nAvailable Stock Names are:");
        this.displayStockName();  
    }

    /**
    * @method stockDetails() - To display stock details.
    */
    stockDetails(){
        
        this.availableStock();
        console.log("Select the Stock number for details");
        var size = this.data.stock.length;

        var choice = parseInt(algoUtil.integerInput());
        
        /**
         * @description To validate Choice.
         */
        while(choice <= 0 || choice >= (size+1)){
            console.log(`\nInvalid Selection Range (1 - ${size}) \n(Enter Again)`);
            var choice = parseInt(algoUtil.integerInput());
        }

        this.displayStockDetails(choice-1)
    }

    /**
    * @method displayStockDetails() - To display stock details.
    */
    displayStockDetails(choice){
        console.log("\nStock Name      : "+this.data.stock[choice].stockName
                   +"\nNumber of Shares: "+this.data.stock[choice].shares
                   +"\nStock Price     : "+this.data.stock[choice].price
                   );
    }


    /**
    * @method buyStock() - To buy stock.
    */
    buyStock(){
        console.log("\n******* BUYING SHARES *******");
        
        this.availableStock();
        console.log("\nSelect the Stock number to Buy Stock");
        var size = this.data.stock.length;

        var choice = parseInt(algoUtil.integerInput());

        /**
         * @description To validate Choice.
         */
        while(choice <= 0 || choice >= (size+1)){
            console.log(`\nInvalid Selection Range (1 - ${size}) \n(Enter Again)`);
            var choice = parseInt(algoUtil.integerInput());
        }

        var shareQty = parseInt(this.data.stock[choice-1].shares);
        console.log("Available Shares are: "+shareQty);

        /**
         * @description Purchasing Qty of shares
         */
        console.log(`\nEnter Quantity of ${this.data.stock[choice-1].stockName}'s Shares you required`);
        var buyShares = parseInt(algoUtil.integerInput());

        /**
         * @description To validate buy stocks.
         */
        while(buyShares <= 0 || buyShares >= (shareQty+1)){
            console.log(`\nInvalid Selection Range (1 - ${shareQty}) \n(Enter Again)`);
            var buyShares = parseInt(algoUtil.integerInput());
        }

        /**
         * @description Adding purchased stock to MyStockData
         */
        let totalAmount = this.shareCalculation(choice-1, buyShares);
        console.log("\nTotal Purchase Amount = "+totalAmount+" Rs.\n");
        
        console.log("Do you want Purches? \n(Enter [1 = Yes] OR [2 = No])");
        var confirmation = parseInt(algoUtil.integerInput());
     
        /**
         * @description To validate confirmation.
         */
        while(confirmation <= 0 || confirmation >= 3){
            console.log(`\nInvalid Input \n(Enter 1 or 2)`);
            var confirmation = parseInt(algoUtil.integerInput());
        }

            if(confirmation == 1){
     
                /**
                 * @description If Already same Stock is Available
                 */
                if(this.checkMyShareNameAvailability(choice-1) == true){
                    for(let i = 0; i < this.MyData.stock.length; i++){
                        /**
                         * @description To check specific stock name is available in list or not.
                         */
                        if(this.data.stock[choice-1].stockName == this.MyData.stock[i].stockName){
                            this.MyData.stock[i].shares += buyShares; 
                        
                            fs.writeFileSync(__dirname + "/JsonFiles/MyStockData.json", JSON.stringify(this.MyData));
                        }
                        
                    }
                    
                }
                else{
                    /**
                     * @description Adding data to json file.
                     */
                    this.MyData.stock.push({
                        "stockName": this.data.stock[choice-1].stockName,
                        "shares": buyShares,
                        "price": this.data.stock[choice-1].price
                    })

                    fs.writeFileSync(__dirname + "/JsonFiles/MyStockData.json", JSON.stringify(this.MyData));
                }
                
            /**
             * @description Writing into a json file.
             */
            let updatedShare = this.data.stock[choice-1].shares - buyShares; 
            
            this.data.stock[choice-1].shares = updatedShare;
            fs.writeFileSync(__dirname + "/JsonFiles/StockData.json", JSON.stringify(this.data));
            
            }
            else{
                return;
            }   
    }

    /**
    * @method displayStockName() - To display Stocks.
    */
    displayStockName(){

        for(let i = 0; i < this.data.stock.length; i++){
            console.log((i+1)+". "+this.data.stock[i].stockName);
            
        }
    }

    /**
    * @method shareCalculation() - To calculates shares.
    */
    shareCalculation(ch, buyShares){
        return this.data.stock[ch].price * buyShares;
    }

    /**
    * @method checkMyShareNameAvailability() - To check availability of shares.
    */
    checkMyShareNameAvailability(ch){
        let found = false;
        for(let i = 0; i < this.MyData.stock.length; i++){
            /**
             * @description To check specific stock name is available in list or not.
             */
            if(this.data.stock[ch].stockName == this.MyData.stock[i].stockName){
                found = true;
            }
        }

        if(found == true)
            return true;
        else
            return false;
    }



    /**
    * @method availableMyStock() - To display my available stock's name.
    */
    availableMyStock(){

        console.log("\nAvailable Stock Names are:");
        this.displaySellStockName();  
    }

    /**
    * @method stockMyDetails() - To display my stock data.
    */
    stockMyDetails(){
        
        this.availableMyStock();
        console.log("Select the Stock number for details");
        var size = this.MyData.stock.length;

        var choice = parseInt(algoUtil.integerInput());

        /**
         * @description To validate Choice.
         */
        while(choice <= 0 || choice >= (size+1)){
            console.log(`\nInvalid Selection Range (1 - ${size}) \n(Enter Again)`);
            var choice = parseInt(algoUtil.integerInput());
        }

        this.displayMyStockDetails(choice-1)
    }

    /**
    * @method displayMyStockDetails() - To display my stock data.
    */
    displayMyStockDetails(choice){
        console.log("\nStock Name      : "+this.MyData.stock[choice].stockName
                   +"\nNumber of Shares: "+this.MyData.stock[choice].shares
                   +"\nStock Price     : "+this.MyData.stock[choice].price
                   );
    }

    /**
    * @method sellStock() - To sell stocks.
    */
    sellStock(){
        console.log("\n******* SELLING SHARES *******");
        this.availableMyStock();
        console.log("\nSelect the Stock number to Sell Stock");
        var size = this.MyData.stock.length;

        var choice = parseInt(algoUtil.integerInput());

        /**
         * @description To validate Choice.
         */
        while(choice <= 0 || choice >= (size+1)){
            console.log(`\nInvalid Selection Range (1 - ${size}) \n(Enter Again)`);
            var choice = parseInt(algoUtil.integerInput());
        }

        var shareQty = parseInt(this.MyData.stock[choice-1].shares);
        console.log("Available Shares in your Account are: "+shareQty);

        /**
         * @description Selling Qty of shares
         */
        console.log(`\nEnter Quantity of ${this.MyData.stock[choice-1].stockName}'s Shares you want to Sell`);
        var sellShares = parseInt(algoUtil.integerInput());

        /**
         * @description To validate selling shares.
         */
        while(sellShares <= 0 || sellShares >= (shareQty+1)){
            console.log(`\nInvalid Selection Range (1 - ${shareQty}) \n(Enter Again)`);
            var sellShares = parseInt(algoUtil.integerInput());
        }

        /**
         * @description Adding Sell stock to StockData
         */
        let totalAmount = this.shareSellCalculation(choice-1, sellShares);
        console.log("\nTotal Selling Amount = "+totalAmount+" Rs.\n");
        
        console.log("Do you want Sell? \n(Enter [1 = Yes] OR [2 = No])");
        var confirmation = parseInt(algoUtil.integerInput());
     
        /**
         * @description To validate confirmation.
         */
        while(confirmation <= 0 || confirmation >= 3){
            console.log(`\nInvalid Input \n(Enter 1 or 2)`);
            var confirmation = parseInt(algoUtil.integerInput());
        }

            if(confirmation == 1){
            
                /**
                 * @description If Already same Stock is Available
                 */
                if(this.checkShareNameAvailability(choice-1) == true){
                    for(let i = 0; i < this.data.stock.length; i++){
                        /**
                         * @description To check specific stock name is available in list or not.
                         */
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
                
            /**
             * @description Writing data to MyStockData
             */
            let updatedShare = this.MyData.stock[choice-1].shares - sellShares; 
            
            this.MyData.stock[choice-1].shares = updatedShare;
            fs.writeFileSync(__dirname + "/JsonFiles/MyStockData.json", JSON.stringify(this.MyData));
            
            }
            else{
                return;
            }   
    }

    /**
    * @method displaySellStockName() - To display stock's name.
    */
    displaySellStockName(){

        for(let i = 0; i < this.MyData.stock.length; i++){
            console.log((i+1)+". "+this.MyData.stock[i].stockName);
            
        }
    }

    /**
    * @method shareSellCalculation() - To calculate selling shares.
    */
    shareSellCalculation(ch, sellShares){
        return this.MyData.stock[ch].price * sellShares;
    }

    /**
    * @method checkShareNameAvailability() - To check share name availability.
    */
    checkShareNameAvailability(ch){
        let found = false;
        for(let i = 0; i < this.data.stock.length; i++){
            /**
             * @description To check specific stock name is available in list or not.
             */
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

/**
 * @description Create object of Stock.
 */
module.exports = new Stock();