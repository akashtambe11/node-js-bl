
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
 * @class StackLinkList to Create top Node null.
 */
class StackLinkList {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  /**
  * @method push() - To push data in stack.
  */
  push(data) {
    try{ 
      /**
      * @description To handle execeptions.
      */
      if(data == undefined || data == null || data.length == 0)  throw "input should not be undefined or null"
 
        this.top = new node(data, this.top);
        this.size++;
         
    }
    catch(e){
        return e;
    }  

  }

  /**
  * @method pop() - To remove data in stack.
  */
  pop() {
    if(this.top == null){
        console.log("Stack is Empty");
        
    }
    else{
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.size--;
    }
  
  }

  /**
  * @method peek() - To find data on peek.
  */
  peek() {
    if(this.top == null){
        console.log("Stack is Empty");
    }
    else
        console.log("Data on PEEK: "+this.top.data);
  }

  /**
  * @method printStack() - To print data in stack.
  */
  printStack() {
    if(this.top == null){
        console.log("Stack is Empty");  
    }

    let current = this.top, str = "";

    while (current != null) {
      str = str + current.data + " --> ";
      current = current.next;
    }   
    console.log(str);
    
  }

  /**
  * @method reverse() - To reverse data in stack.
  */
  reverse(){
    var array = new Array();

    var current = this.top;
    while(current != null){
        array += current.data + " ";
        current = current.next;
    }
    array = array.split(" ");
   
    for(var i = array.length-2; i >= 1; i--){
        process.stdout.write(array[i]+" --> ");
    }
    process.stdout.write(array[i]);
    console.log();
    
}

}

/**
 * @description Create object of StackLinkList
 */
module.exports = new StackLinkList();





