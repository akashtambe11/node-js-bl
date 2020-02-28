var util = require('../Utility/DSstackUsingList');
var algoUtil = require('../Utility/AlgorithmUtility');

stackListMain = () => {

    while(true){
        console.log("\n1. Push (Add Element in Stack)");
        console.log("2. Pop (Remove Element in Stack)");
        console.log("3. Data on Peek");
        console.log("4. Reverse the Stack");
        console.log("5. Print Stack");
        console.log("6. Exit ");

        console.log("\nEnter your choice");
        let choice = parseInt(algoUtil.integerInput());

        switch(choice){
            case 1:
                console.log("Enter Element to push in Stack");
                let data = parseInt(algoUtil.integerInput());
                util.push(data);
                break;

            case 2:
                util.pop();
                break;

            case 3:
                util.peek();
                // var peekData = util.peek();    
                // console.log("Data on peek = "+peekData)
                break;

            case 4:
                util.reverse();
                // var peekData = util.peek();    
                // console.log("Data on peek = "+peekData)
                break;

            case 5: 
                util.printStack();
                break;

            case 6:
                return;
            
            default:
                console.log("Invalid Input (Range 1 - 6)");
        }
        
    }
    

}

stackListMain();