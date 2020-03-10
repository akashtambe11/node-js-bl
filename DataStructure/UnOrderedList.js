/********************************************************************************************
*Execution    :  default node     cmd> node UnOrderedList.js
*
*Purpose      :  To perform Unordered LinkList opertaion of Data structure.
*@description  
*
*@file        :  UnOrderedList.js
*@overview    :  UnOrderedList module is to perform various Unordered LinkList operations.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var util = require('../Utility/DSunOrderedList');
var algoUtil = require('../Utility/AlgorithmUtility');
var read = require('readline-sync');
var fs = require('fs');


orderedList = () => {
    var textData = util.fileRead();

    console.log("Text file contains following data : \n"+textData);
    var arrData = textData.split(" "); 
    // console.log(arrData);
    
    
    /**
     * @description Adding all data in unordered LinkList
     */
    for(let i= 0; i < arrData.length; i++){
        util.insertAtLast(arrData[i])
    }
    //Printing list of Text File
    var oldList = util.printLinkList();
    console.log("Old List = \n"+oldList+"\n");
    

    while(true){
        
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

        console.log("\nPlease enter your choice");
        var choice = parseInt(algoUtil.integerInput());

        switch(choice){
            case 1:
                console.log("Enter word to insert at start");
                var data = algoUtil.stringInput().toLowerCase();
                util.insertAtFirst(data);
                break;

            case 2:
                console.log("Enter word to insert at end");
                var data = algoUtil.stringInput().toLowerCase();
                util.insertAtLast(data);
                break;

            case 3:
                console.log("Enter word to insert at position");
                var data = algoUtil.stringInput().toLowerCase();
                console.log("Enter the position");
                var index = algoUtil.integerInput();
                util.insertAtPosition(data, index);
                break;

            case 4:
                util.deleteAtStart();
                break;
            
            case 5:
                util.deleteAtEnd();
                break;
            
            case 6:
                console.log("Enter index to delet element");
                var index = algoUtil.integerInput();
                util.deleteAtPosition(index);
                break;
            
            case 7:
                console.log("Enter index to get data");
                var index = algoUtil.integerInput();
                util.indexGetData(index);
                break;
            
            case 8:
                console.log("If element found: Delete It,\nIf Element not found: Add it");
                
                console.log("\nEnter element to search");
                var data = algoUtil.stringInput().toLowerCase();
                util.search(data);
                break;
            
            case 9:
                var list = util.printLinkList();
                console.log("Unordered LinkList: \n"+list+"\n");
                break;
                
            case 10:
                return;
            
            default:
                console.log("Invalid Input (Range: 1 -10)");
                break;
        }
    }

}
orderedList();