var util = require('../Utility/DSqueueUtility');
var algoUtil = require('../Utility/AlgorithmUtility');

queuMain = () => {

    while(true){
        console.log("1. Enqueue (Add Element in Queue)");
        console.log("2. Dequeue (Remove Element in Queue)");
        console.log("3. Data on Peek");
        console.log("4. Print Queue");
        console.log("5. Exit ");

        console.log("\nEnter your choice");
        let choice = parseInt(algoUtil.integerInput());

        switch(choice){
            case 1:
                console.log("Enter Element to Enqueue");
                let data = parseInt(algoUtil.integerInput());
                util.enqueue(data);
                break;

            case 2:
                util.dequeue();
                break;

            case 3:
                var peekData = util.peek();    
                console.log("Data on peek = "+peekData)
                break;

            case 4: 
                util.printQueue();
                break;

            case 5:
                return;
            
            default:
                console.log("Invalid Input (Range 1 - 5)");
        }
        
    }
    
} 

queuMain();