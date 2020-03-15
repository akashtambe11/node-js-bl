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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSunOrderedList');
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to perform ordered linklist operations.
 */
orderedList = () => {
    var textData = util.fileRead();

    console.log("\nText file contains following data : \n"+textData);
    var arrData = textData.split(" "); 
    // console.log(arrData);
    
    
    /**
     * @description Adding all data in unordered LinkList
     */
    for(let i= 0; i < arrData.length; i++){
        util.insertAtLast(arrData[i])
    }
    // //Printing list of Text File
    // var oldList = util.printLinkList();
    // console.log("Old List = \n"+oldList+"\n");
    
    /**
     * @description Condition must be reamin true until user exit from process.
     */
    while(true){
        
        console.log("\n1.  Insert Element at start");
        console.log("2.  Insert Element at end");
        console.log("3.  Insert Element at position");
        console.log("4.  Delete Element at start");
        console.log("5.  Delete Element at end");
        console.log("6.  Delete Element at position");
        console.log("7.  Find data at Index");
        console.log("8.  Search data");
        console.log("9.  Print List");
        console.log("10. LOG OUT");

        console.log("\nPlease enter your choice");
        var choice = parseInt(algoUtil.integerInput());

        switch(choice){
            case 1:
                console.log("\nEnter word to insert at start");
                var data = algoUtil.stringInput().toLowerCase();
                /**
                * @description Calling insertAtFirst method from DSunOrderedList File.
                */
                util.insertAtFirst(data);
                break;

            case 2:
                console.log("\nEnter word to insert at end");
                var data = algoUtil.stringInput().toLowerCase();
                /**
                * @description Calling insertAtLast method from DSunOrderedList File.
                */
                util.insertAtLast(data);
                break;

            case 3:
                console.log("\nEnter word to insert at position");
                var data = algoUtil.stringInput().toLowerCase();
                console.log("Enter the position");
                var index = algoUtil.integerInput();
                /**
                * @description Calling insertAtPosition method from DSunOrderedList File.
                */
                util.insertAtPosition(data, index);
                break;

            case 4:
                /**
                * @description Calling deleteAtStart method from DSunOrderedList File.
                */
                util.deleteAtStart();
                break;
            
            case 5:
                /**
                * @description Calling deleteAtEnd method from DSunOrderedList File.
                */
                util.deleteAtEnd();
                break;
            
            case 6:
                console.log("\nEnter index to delet element");
                var index = algoUtil.integerInput();
                /**
                * @description Calling deleteAtPosition method from DSunOrderedList File.
                */
                util.deleteAtPosition(index);
                break;
            
            case 7:
                console.log("\nEnter index to get data");
                var index = algoUtil.integerInput();
                /**
                * @description Calling indexGetData method from DSunOrderedList File.
                */
                util.indexGetData(index);
                break;
            
            case 8:
                console.log("\nIf element found: Delete It,\nIf Element not found: Add it");
                
                console.log("\nEnter element to search");
                var data = algoUtil.stringInput().toLowerCase();
                /**
                * @description Calling search method from DSunOrderedList File.
                */
                util.search(data);
                break;
            
            case 9:
                /**
                * @description Calling printLinkList method from DSunOrderedList File.
                */
                var list = util.printLinkList();
                console.log("\nUnordered LinkList: \n"+list+"\n");
                break;
                
            case 10:
                return;
            
            default:
                console.log("\nInvalid Input (Range: 1 -10)");
                break;
        }
    }

}
orderedList();