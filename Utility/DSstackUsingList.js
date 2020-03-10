
/**
 * @class node to Create empty Node.
 */
class node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class StackLinkList {
  constructor() {
    this.top = null;
    this.size = 0;
  }


  push(data) {
    try{ 
      if(data == undefined || data == null || data.length == 0)  throw "input should not be undefined or null"
      //if(!(/^[a-zA-Z]+$/.test(data)))                            throw "input should be string"

        this.top = new node(data, this.top);
        this.size++;
         
    }
    catch(e){
        return e;
    }  

  }


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


  peek() {
    if(this.top == null){
        console.log("Stack is Empty");
    }
    else
        console.log("Data on PEEK: "+this.top.data);
  }


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


  reverse(){
    var array = new Array();

    var current = this.top;
    while(current != null){
        array += current.data+" ";
        current = current.next;
    }
    array = array.split(" ");
   
    for(var i = array.length-2; i >= 1; i--){
        process.stdout.write(array[i]+" --> ");
    }
    process.stdout.write(array[i]) 
}

}

/**
 * @description Create object of StackLinkList
 */
module.exports = new StackLinkList();





