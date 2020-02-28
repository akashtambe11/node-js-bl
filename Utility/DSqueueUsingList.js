
/**
 * @class node to Create empty Node.
 */
class node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class QueueLinkList {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }

    enqueue(data){
        if(this.front == null && this.rear == null){
            this.front = this.rear = new node(data, null);
            this.size++;
        }
        else{
            this.newNode = new node(data, null);
            this.rear.next = this.newNode;
            this.rear = this.newNode;
            this.size++;
        }
    }

    dequeue() {
        
        if(this.front == null){
            console.log("Queue is Empty");  
        }
        else{
            let temp = this.front;
            this.front = temp.next;
            temp.next = null;
            this.size--;
        }
      
    }

    printStack() {
        if(this.front == null){
            console.log("Queue is Empty");  
        }

        let current = this.front, str = "";
    
        while (current != null) {
          str = str + current.data + " --> ";
          current = current.next;
        }   
        console.log(str);
        
      }

  }

  module.exports = new QueueLinkList();