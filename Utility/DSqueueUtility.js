var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @class ArrayQueue to Create new array.
 */
class ArrayQueue {
    constructor() {
        this.queue = new Array();
        this.front = -1;
        this.rear = -1;
    }

    /**
     * @method enqueue() - To add data in queue.
     */
    enqueue(value) {
        try{ 
            /**
             * @description To handle execeptions.
             */
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

    /**
     * @method dequeue() - To remove data in queue.
     */
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

    /**
     * @method push() - To push data in queue.
     */
    peek() {

        if(this.front == -1 && this.rear == -1) {
            console.log("Queue is Underflow");
         
        }else {
            let peekData = this.queue[this.front];
            console.log("Data on peek = "+peekData)
        }
        
    }

    /**
     * @method printQueue() - To print data in queue.
     */
    printQueue() {

        if(this.front == -1 && this.rear == -1) {
            console.log("Queue is Ended/Underflow");
            return;
        }else{
            for(let i = this.front; i <= this.rear; i++){
                console.log("Position queue["+i+"] = "+this.queue[i]);
            }
            console.log(); 
        }
    }
   
}

/**
 * @description Create object of ArrayQueue.
 */
module.exports = new ArrayQueue();