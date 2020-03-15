/********************************************************************************************
*Execution    :  default node     cmd> node OrderedList.js
*
*Purpose      :  To perform Ordered LinkList opertaion of Data structure.
*@description  
*
*@file        :  OrderedList.js
*@overview    :  OrderedList module is to perform various Ordered LinkList operations.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/DSorderedList');
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to perform ordered linklist operations.
 */
orderedList = () => {
    var textData = util.fileReadOL();

    console.log("\nText file contains following data : \n"+textData);
    /**
     * @description .map function used to convert each number in integer
     */
    var arrData = textData.split(" ").map(function(item) {
        return parseInt(item, 10);
    }); 
    
    /**
     * @description Adding all data in unordered LinkList
     */
    for(let i= 0; i < arrData.length; i++){
        util.insertAtLast(parseInt(arrData[i]));
    }
    
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
                console.log("Enter number to insert at start");
                var data = algoUtil.integerInput();
                /**
                * @description Calling insertAtFirst method from DSorderedList File.
                */
                util.insertAtFirst(data);
                break;

            case 2:
                console.log("Enter number to insert at end");
                var data = algoUtil.integerInput();
                /**
                * @description Calling insertAtLast method from DSorderedList File.
                */
                util.insertAtLast(data);
                break;

            case 3:
                console.log("Enter number to insert at position");
                var data = algoUtil.integerInput();
                console.log("Enter the position");
                var index = algoUtil.integerInput();
                /**
                * @description Calling insertAtPosition method from DSorderedList File.
                */
                util.insertAtPosition(data, index);
                break;

            case 4:
                /**
                * @description Calling deleteAtStart method from DSorderedList File.
                */
                util.deleteAtStart();
                break;
            
            case 5:
                /**
                * @description Calling deleteAtEnd method from DSorderedList File.
                */
                util.deleteAtEnd();
                break;
            
            case 6:
                console.log("Enter index to delete element");
                var index = algoUtil.integerInput();
                /**
                * @description Calling deleteAtPosition method from DSorderedList File.
                */
                util.deleteAtPosition(index);
                break;
            
            case 7:
                console.log("Enter index to get data");
                var index = algoUtil.integerInput();
                /**
                * @description Calling indexGetData method from DSorderedList File.
                */
                util.indexGetData(index);
                break;
            
            case 8:
                console.log("If element found: Delete It,\nIf Element not found: Add it");
                
                console.log("\nEnter number to search");
                var data = algoUtil.integerInput();
                /**
                * @description Calling search method from DSorderedList File.
                */
                util.search(data);
                break;
            
            case 9:
                /**
                * @description Calling printLinkList method from DSorderedList File.
                */
                util.printLinkList();
                var list = util.printLinkList();
                console.log("\nLength of List: \n"+ list[1]);
                console.log("\nOrdered LinkList: \n"+list[0]+"\n");
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