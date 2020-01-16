var read = require("readline-sync");
var fs = require("fs");

/**
 * @class node to 
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
    return textData;
   
  }

  
  /**
   * @description Insert data at the first
   */

  insertAtFirst(data) {
    try{
      if(data == undefined || data == null) throw "Data cannot be undefined or null"
      if(!isNaN(name))                      throw "Input should not be string"
    }
    catch(e){
      return e;
    }
    this.head = new node(data, this.head);
    this.size++;
  }

  /**
   * @description Insert data at the last
   */
  insertAtLast(data) {
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

  /**
   * @description Insert data at position
   */
  insertAtPosition(data, index) {
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
    if (index > 0 && index > this.size) {
      return;
    }
    let previous, current;
    current = this.head;

    if (index == 0) {
      this.head = current;
    }
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
  }

  /**
   * @description To search element and if found then it will be deleted
   *              or if not fond then it will add at end
   */
 search(data){
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
  
//-------------------------find data-------------------------------
  /**
   * @description Find data at perticuler index
   */
  indexGetData(index) {
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
    console.log(`Data at Position ${index} =  ` +current.data);
  }
 
  //------------------------------------printing----------------------
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
    console.log("Size of List = " + this.size);
    // return str;
    fs.writeFileSync(__dirname + "/TextFiles/UnOrderedList.txt", str, "utf-8");
    return str;
  }
}
/**
 * @description Create object of
 */
module.exports = new UnOrderedLinkList();

