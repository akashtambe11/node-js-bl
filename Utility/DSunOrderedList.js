var read = require("readline-sync");
var fs = require("fs");

/**
 * @class node to Create empty Node.
 */
class node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class UnOrderedLinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  /**
   * @description To read UnorderedList File
   */
  fileRead() {
    var textData = fs.readFileSync(__dirname + "/TextFiles/UnOrderedList.txt", "utf-8");
    return textData.trim();
   
  }

  
  /**
   * @description Insert data at the first
   */
  insertAtFirst(data) {
    try{ 
      if(data == undefined || data == null || data.length == 0)  throw "input should not be undefined or null"
      if(!(/^[a-zA-Z]+$/.test(data)))                            throw "input should be string"

        this.head = new node(data, this.head);
        this.size++;
         
    }
    catch(e){
        return e;
    }  

  }

  /**
   * @description Insert data at the last
   */
  insertAtLast(data) {
    try{ 
      if(data == undefined || data == null || data.length == 0)  throw "input should not be undefined or null"
      if(!(/^[a-zA-Z]+$/.test(data)))                            throw "input should be string"
        
        const endNode = new node(data);
          if (this.head == null) {
          this.head = endNode;
          } else {
              let current = this.head;
              while (current.next != null) {
              current = current.next;
            }
              current.next = endNode;
          }
        this.size++;
    }
    catch(e){
        return e;
    }
    
  }

  /**
   * @description Insert data at position
   */
  insertAtPosition(data, index) {
    try{ 
      if(data == undefined || data == null || data.length == 0 || index == undefined || index == null || index.length == 0)
                                                                  throw "input should not be undefined or null"
      if(!(/^[a-zA-Z]+$/.test(data)))                             throw "input data should be string"
      if(isNaN(index))                                            throw "input Index should be number"

         /**
         * @description Index should be grater than zero and size;
         */
        if (index > 0 && index > this.size) {
          return;
        }

        if (index == 0) {
          this.head = new node(data, this.head);
          this.size++;
          return;
        }

        const positionNode = new node(data);
        let current, previous;
        current = this.head;

        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        positionNode.next = current;
        previous.next = positionNode;
        this.size++;
         
    }
    catch(e){
        return e;
    } 
    
}

  /**
   * @description Delete at start
   */
  deleteAtStart() {
    let temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.size--;
  }

  /**
   * @description Delete at end
   */
  deleteAtEnd() {
    let current,
    previous = null;
    current = this.head;
    // if (this.size == 1) {
    //   this.deleteAtStart();
    // } else {
      while (current.next != null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
      this.size--;
    
  }

  /**
   * @description Delete at postion
   */
  deleteAtPosition(index) {
    try{ 
      if(index == undefined || index == null || index.length == 0)   throw "input should not be undefined or null"
      if(isNaN(index))                                               throw "input should be number"

        if (index > 0 && index > this.size) {
          return;
        }
        let previous, current;
        current = this.head;
    
        if (index == 0) {
          this.deleteAtStart()
        }
        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;

    }
    catch(e){
        return e;
    }

  }

  /**
   * @description To search element and if found then it will be deleted
   *              or if not fond then it will add at end
   */
 search(data){
  try{ 
    if(data == undefined || data == null || data.length == 0)   throw "input should not be undefined or null"
    if(!(/^[a-zA-Z]+$/.test(data)))                             throw "input should be string"

    let current = this.head;
    let index = 0;
    let found = false;
    //If data found then it will be deleted
      while(current != null){
        if(data == current.data){                               
          this.deleteAtPosition(index);
          found = true;
        }
    current = current.next;
    index++;   
    }
                                               
    //If data is not found then it will be added
    if(found == false){
      this.insertAtFirst(data);
    }
  }
  catch(e){
      return e;
  }
    
 }
  
  /**
   * @description Find data at perticuler index
   */
  indexGetData(index) {
    try{ 
      if(index == undefined || index == null || index.length == 0)   throw "input should not be undefined or null"
      if(isNaN(index))                                               throw "input should be number"

        /**
         * @description If index of node is larger that size then return null.
         */
        if (index > this.size) {
          return null;
        }

        let current = this.head;
          for (let i = 0; i < index; i++) {
            current = current.next;
          }
        console.log(`Data at Position ${index} =  ` +current.data+`\n`);
    }
    catch(e){
        return e;
    }

  }
 

  /**
   * @description Print the LinkList
   */
  printLinkList() {
    let current = this.head, str = "";

    while (current != null) {
      // console.log(current.data);
      str = str + current.data + " ";
      current = current.next;
    }   
    console.log("\nLength of List = " + this.size);
    // return str;
    fs.writeFileSync(__dirname + "/TextFiles/UnOrderedList.txt", str, "utf-8");
    return str;
  }
}

/**
 * @description Create object of UnOrderedLinkList
 */
module.exports = new UnOrderedLinkList();

