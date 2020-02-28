var util = require('../Utility/DSqueueUsingList');
var algoUtil = require('../Utility/AlgorithmUtility');

QueueListMain = () => {

    while(true){
        console.log("\n1. Enqueue (Add Element in Queue)");
        console.log("2. Dequeue (Remove Element in Queue)");
        console.log("3. Print Queue");
        console.log("4. Exit ");

        console.log("\nEnter your choice");
        let choice = parseInt(algoUtil.integerInput());

        switch(choice){
            case 1:
                console.log("Enter Element to push in Queue");
                let data = parseInt(algoUtil.integerInput());
                util.enqueue(data);
                break;

            case 2:
                util.dequeue();
                break;

            case 3: 
                util.printStack();
                break;

            case 4:
                return;
            
            default:
                console.log("Invalid Input (Range 1 - 4)");
        }
        
    }
    

}

QueueListMain();