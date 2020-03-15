
/**
 * @class node to Create empty Node.
 */
class node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }  
  
  /**
   * @class QueueLinkList to Create new linklist.
   */
  class QueueLinkList {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }

    /**
     * @method enqueue() - To add data in queue.
     */
    enqueue(data){ 
      try{ 
        /**
        * @description To handle execeptions.
        */
        if(data == undefined || data == null || data.length == 0)   
                                                     throw "input should not be undefined or null"
    }
    catch(e){
        return e;
    } 
    
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

    /**
     * @method dequeue() - To remove data in queue.
     */
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

    /**
     * @method printQueue() - To print data in queue.
     */
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