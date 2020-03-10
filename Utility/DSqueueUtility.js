var algoUtil = require('../Utility/AlgorithmUtility');

class ArrayQueue {
    constructor() {
        this.queue = new Array();
        this.front = -1;
        this.rear = -1;
    }

    enqueue(value) {
        try{ 
     
            if(value == undefined || value == null || value.length == 0)   throw "input should not be undefined or null"
            if(isNaN(value))                                               throw "input should be number"
             
        }
        catch(e){
            return e;
        } 

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
            console.log();
            
        }
    }
   
}


module.exports = new ArrayQueue();