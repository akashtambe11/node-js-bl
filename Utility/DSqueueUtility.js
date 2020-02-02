var algoUtil = require('../Utility/AlgorithmUtility');

class ArrayQueue {
    constructor() {
        this.queue = new Array();
        this.front = -1;
        this.rear = -1;
    }

    enqueue(value) {
        if(this.front == -1 && this.rear == -1) {
            this.front = this.rear = 0;
            this.queue[this.rear] = value;
        }else{
            this.rear++;
            this.queue[this.rear] = value;
        }
    }

    dequeue(){
       
        if(this.front == -1 && this.rear == -1) {
            console.log("Queue is Underflow");
            return;
        }else if(this.fornt == this.rear){
            this.front = this.rear = -1;
        }else{
            this.front++;
        }
    }

    peek() {
        return this.queue[this.front];
    }

    printQueue() {
        if(this.front == -1 && this.rear == -1) {
            console.log("Queue is Underflow");
            return;
        }else{
            for(let i = this.front; i <= this.rear; i++){
                console.log("Position queue["+i+"] = "+this.queue[i]);
            }
        }
    }
    //Bank cash counter
    bankCounter(people, bankAmount) {

        var totalAmmount = bankAmount, money, personCount = 1;
        //for loop for make a queue
        for(let i = 0; i < people; i++){
            this.enqueue(i);
        }
        while(people > 0) {
            console.log(`TRANSACTION FOR PERSON: ${personCount} \n`);
            
            console.log("1. Deposit Money");
            console.log("2. Withdraw Money");

            console.log("\nEnter your choice");
            var choice = parseInt(algoUtil.integerInput());
            
            switch(choice){
                case 1:
                    console.log("\nEnter money to Deposit");
                    money = parseInt(algoUtil.integerInput());
                    this.depositMoney(totalAmmount, money)
                    break;
                
                case 2:
                    console.log("\nEnter money to Withdraw");
                    money = parseInt(algoUtil.integerInput());
                    this.withdrawMoney(totalAmmount, money)
                    break;
                
                default:
                    console.log("\nInvalid Input (Range 1 - 2)");
                    break;
                         
            }
            people--;
            personCount++;

  
        }

    }
    depositMoney(totalAmmount, money) {
        totalAmmount = totalAmmount + money;
        console.log("\nUpdated Ammount of Bank: "+totalAmmount);

    }
    
    withdrawMoney(totalAmmount, money) {
        if(totalAmmount >= money){
            totalAmmount = totalAmmount - money;
            console.log("\nUpdated Ammount of Bank: "+totalAmmount);
        }else{
            console.log("\nInsufficient Balance in Bank");
            
        }
    }


}


module.exports = new ArrayQueue();