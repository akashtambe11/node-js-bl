
class DeQueue {
  
    constructor() {
       
        this.deQueue = new Array();

        this.front = -1;
        this.rear = -1;
    }

    enqueFront(value, n){
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


    getFront(n) {
        if (this.front == -1 && this.rear == -1) {
            console.log("Queue is Empty \n");
        }
        else
            console.log("Data on Front = "+this.deQueue[this.front]+"\n");
    }
    

    getRear(n) {
        if (this.front == -1 && this.rear == -1) {
            console.log("Queue is Empty \n");
        }
        else
            console.log("Data on Rear = "+this.deQueue[this.rear]+"\n");
    }

    deQueueFront(n) {
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
        var i = this.front;
        while (i != this.rear) {
            console.log(this.deQueue[i]);
            i = (i + 1) % n;
        }
        console.log(this.deQueue[this.rear]);
        
    }

    palindromeChecker(str, n){
        
        for(let m = 0; m < n; m++){
            if(m == 0){
                this.enqueFront(str[m], n)
            }
            else{
                this.enqueRear(str[m], n)
            }
        }

        var i = this.front;
        var j = this.rear;
        var check = false;

        while(i < j){
            if(this.deQueue[i] == this.deQueue[j]){
                check = true;
                break;
            }
            i++;
            j--;
        }

        if(check == true)
                return true;
            else
                return false;
    }
    
}

module.exports = new DeQueue();