var util = require('../Utility/DShashingUtility');
var OLLutil = require('../Utility/DSorderedList')
var algoUtil = require('../Utility/AlgorithmUtility');

hashTable = () => {
   
    //To create List
    for(let i = 0; i < 11; i++){
        OLLutil.insertAtLast(i);
    }
    
    //Size Taken
    const size = OLLutil.getSize();
    console.log(size);
    
    
    //To add Empty array in linkList
    for(let i = 0; i < size; i++){
        OLLutil[i] = [];
    }

    var textData = util.fileReadHash();

    console.log("Text file contains following data : \n"+textData);

    var arrTextData = textData.split(" ").map(function(item) {
        return parseInt(item, 10);
    }); 
    console.log(arrTextData);

       
        //To add Elements in array
        for(let i = 0; i < arrTextData.length; i++){
            util.add(arrTextData[i], OLLutil, size);
            
        }

     while(true)
     {

        console.log("1. Add");
        console.log("2. Remove");
        console.log("3. Print");
        console.log("4. Exit");
        
        let choice = parseInt(algoUtil.integerInput());

        switch(choice){
            case 1:
                console.log("Enter the value you want to add");
                let value =  parseInt(algoUtil.integerInput());
                util.add(value, OLLutil, size);
                break;
            
            case 2:
                console.log("Enter the value you want to remove");
                let value1 =  parseInt(algoUtil.integerInput());
                util.remove(value1, OLLutil, size);
                break;
            
            case 3:
               
                let result = util.print(OLLutil,size);
                break;
            
            case 4:
                return;

            default:
                console.log("Invalid Input (Range: 1 - 4)");
                break;
        
        }
    }
}

hashTable();