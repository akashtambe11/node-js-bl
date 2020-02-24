var fs = require('fs');
var algoUtil = require('../Utility/AlgorithmUtility')

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