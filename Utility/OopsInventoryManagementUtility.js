/**
 * @description Dependencies are required to be install before execution of this file.
 */
var fs = require('fs');
var algoUtil = require('../Utility/AlgorithmUtility')

/**
 * @class InventoryManagement to read Json File.
 */
class InventoryManagement{
    constructor(){
        var jsonData = fs.readFileSync(__dirname + "/JsonFiles/InventoryManage.json");
        this.data = JSON.parse(jsonData);
        
    }  

    /**
    * @method displayJsonData() - To display data.
    */
    displayJsonData(){
        console.log(this.data);
    }

    
    /**
    * @method add() - To add data.
    */
    add(){

        console.log("Enter name of Stock");
        var name = algoUtil.stringInput();

        console.log("Enter no. of Shares");;
        var share = algoUtil.integerInput();

        console.log("Enter Price");
        var price = algoUtil.integerInput();
        /**
         * @description To add data in json file..
         */
        this.data.stock.push({
            "stockName": name,
            "shares": share,
            "price": price
        })

        fs.writeFileSync(__dirname + "/JsonFiles/InventoryManage.json", JSON.stringify(this.data));
    }
    
    /**
    * @method delete() - To delete data.
    */
    delete(){

        this.displayJsonData();
        console.log("Enter Stock Name to be removed");
        var name = algoUtil.stringInput();

        for(let i = 0; i < this.data.stock.length; i++){
            /**
             * @description To check entered name matches to jason file's data.
             */
            if(this.data.stock[i].stockName.toLowerCase() == name.toLowerCase()){
                var index = this.data.stock.indexOf(this.data.stock[i]);
                this.data.stock.splice(index, 1);
            }
        }
        /**
         * @description To write data in json file.
         */
        fs.writeFileSync(__dirname + "/JsonFiles/InventoryManage.json", JSON.stringify(this.data));
    }
    
}

/**
 * @description Create object of Clinic.
 */
module.exports = new InventoryManagement();