var util = require('../Utility/DataStructureUtility')
var read = require('readline-sync');
var fs = require('fs');


orderedList = () => {
    util.fileRead();
    while(true){
        console.log("Please enter your choice\n");

        console.log("1. Insert Element at start");
        console.log("2. Insert Element at end");
        console.log("3. Insert Element at position");
        console.log("4. Delete Element at start");
        console.log("5. Delete Element at end");
        console.log("6. Delete Element at position");
        console.log("7. Find data at Index");
        console.log("8. Search data");
        console.log("9. Print List");
        console.log("10. Exit");
        
    }
}
orderedList();