
class DeQueue {
  
    constructor() {
       
        this.deQueue = new Array();

        this.front = -1;
        this.rear = -1;
    }

    enqueFront(value, n){
        try{ 
     
            if(value == undefined || value == null || value.length == 0 || n == undefined || n == null || n.length == 0)   
                                                         throw "input should not be undefined or null"
        }
        catch(e){
            return e;
        } 
        
        if (this.front == 0 && this.rear == n-1 || this.front == this.rear + 1) {
            console.log("Queue is Full \n");
        }
        else if (this.front == -1 && this.rear == -1) { //Empty
            this.front = this.rear = 0;
            this.deQueue[this.front] = value;
        }
        else if (this.front == 0) {
            this.front = n-1;
            this.deQueue[this.front] = value;
        }
        else {
            this.front--;
            this.deQueue[this.front] = value;
        }
    }


    enqueRear(value, n){
        try{ 
     
            if(value == undefined || value == null || value.length == 0 || n == undefined || n == null || n.length == 0)   
                                                         throw "input should not be undefined or null"
        }
        catch(e){
            return e;
        } 

        if (this.front == 0 && this.rear == n-1 || this.front == this.rear + 1) {
            console.log("Queue is Full \n");
        }
        else if (this.front == -1 && this.rear == -1) {  //Empty
            this.front = this.rear = 0;
            this.deQueue[this.rear] = value;
        }
        else if (this.rear == n-1) {
            this.rear = 0;
            this.deQueue[this.rear] = value;
        }
        else {
            this.rear++;
            this.deQueue[this.rear] = value;
        }
    }


    getFront() {
        if (this.front == -1 && this.rear == -1) {
            console.log("Queue is Empty \n");
        }
        else
            console.log("Data on Front = "+this.deQueue[this.front]+"\n");
    }
    

    getRear() {
        if (this.front == -1 && this.rear == -1) {
            console.log("Queue is Empty \n");
        }
        else
            console.log("Data on Rear = "+this.deQueue[this.rear]+"\n");
    }

    deQueueFront(n) {
        try{ 
     
            if(n == undefined || n == null || n.length == 0)   
                                                    throw "input should not be undefined or null"
        }
        catch(e){
            return e;
        } 
        if (this.front == -1 && this.rear == -1) {
            console.log("Queue is Empty \n");
        }
        else if (this.front == this.rear) {
            this.front = this.rear = -1;
        }
        else if (this.front == n-1) {
            this.front = 0;
        }
        else
            this.front++;
    }


    deQueueRear(n) {
        try{ 
     
            if(n == undefined || n == null || n.length == 0)   
                                                    throw "input should not be undefined or null"
        }
        catch(e){
            return e;
        } 

        if (this.front == -1 && this.rear == -1) {
            console.log("Queue is Empty \n");
        }
        else if (this.front == this.rear) {
            this.front = this.rear = -1;
        }
        else if (this.rear == 0) {
            this.rear = n-1;
        }
        else
            this.rear--;
    }


    printQueue(n) {
        try{ 
     
            if(n == undefined || n == null || n.length == 0)   
                                                    throw "input should not be undefined or null"
        }
        catch(e){
            return e;
        } 
        
        var i = this.front;
        while (i != this.rear) {
            console.log(this.deQueue[i]);
            i = (i + 1) % n;
        }
        console.log(this.deQueue[this.rear]);
        
    }
    
}

module.exports = new DeQueue();