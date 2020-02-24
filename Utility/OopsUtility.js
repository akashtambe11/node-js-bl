var fs = require('fs');
var algoUtil = require('../Utility/AlgorithmUtility')


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