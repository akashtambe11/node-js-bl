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

    bankCounter(people, amount) {

        let totalAmmount = amount;
        //for loop for make a queue
        for(let i = 0; i < people; i++){
            this.enqueue(i);
        }
        while(people > 0) {
            console.log("Enter your choice");
            var choice = parseInt(algoUtil.integerInput());

            console.log("1. Deposit Money");
            console.log("2. Withdraw Money");
            
            switch(choice){
                case 1:
                    console.log("Enter money to Deposit");
                    let money = parseInt(algoUtil.integerInput());
                    this.depositMoney(amount, money)
                    break;
                
                case 2:
                    console.log("Enter money to Withdraw");
                    let money = parseInt(algoUtil.integerInput());
                    this.withdrawMoney(amount, money)
                    break;
                
                default:
                    console.log("Invalid Input (Range 1 - 2)");
                    break;
                         
            }
            people--;
  
        }

    }
    //Code remaining++++++++++++++++++++++++++++++++++++++++++++++++++++++
    depositMoney(amount, money) {
        amount = amount + money;
        console.log("Updated Ammount of Bank: "+amount);
        

    }
    
    withdrawMoney(amount, money) {

    }


}










// let q = new ArrayQueue();

// q.enqueue(11);
// q.enqueue(12);
// q.enqueue(13);
// q.enqueue(14);
// q.enqueue(15);

// q.dequeue();

// q.printQueue();


module.exports = new ArrayQueue();