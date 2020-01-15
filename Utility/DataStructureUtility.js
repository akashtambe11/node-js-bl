var read = require("readline-sync");
var fs = require("fs");

class node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class UnorderedLinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  fileRead() {
    var data = fs.readFileSync(
      __dirname + "/TextFiles/UnOrderedList.txt",
      "utf-8"
    );
    console.log(__dirname);

    console.log(data);
  }

  //-----------------------------------------------insert----------------------------
  /**
   * @description Insert data at the first
   */

  insertAtFirst(data) {
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
    console.log(`Data at Position ${index} = \n` + current.data);
  }
  //-------------------------------------------------delete-------------------------------------

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
    if (this.size == 1) {
      this.deleteAtStart();
    } else {
      while (current.next != null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
      this.size--;
    }
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
   * @description Print the LinkList
   */
  printLinkList() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
    console.log("======>>>" + this.size);
  }
}
module.exports = new UnorderedLinkList();

// const ll = new LinkList();
// ll.insertAtFirst(10);
// ll.insertAtFirst(20);
// ll.insertAtFirst(30);
// ll.insertAtFirst(40);

// ll.insertAtLast(500);
// ll.insertAtLast(700);

// ll.insertAtPosition(555, 2);

// // ll.indexGetData(2)
// // ll.deleteAtPosition(5)
// // ll.deleteAtStart();
// ll.deleteAtEnd();
// ll.printLinkList();
