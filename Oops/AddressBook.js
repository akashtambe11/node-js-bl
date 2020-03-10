/********************************************************************************************
*Execution    :  default node     cmd> node AddressBook.js
*
*Purpose      :  To manage address book data according to user input.
*@description  
*
*@file        :  AddressBook.js
*@overview    :  AddressBook module is to add, delete or modify the person data and store 
                 in external json file.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var util = require('../Utility/AddressBookUtility');
var algoUtil = require('../Utility/AlgorithmUtility')


AddBookMain = () => {

    while(true) {

        console.log("\n***** MAIN MENU ***** \n1. Add Person. \n2. Delete Person. \n3. Edit Person Data \n4. Sort by Last Name. \n5. Sort by Zip.  \n6. Display. \n7. LOG OUT");

        console.log("\nEnter your Choice");
        var choice = parseInt(algoUtil.integerInput());

        switch(choice){

            case 1:
                util.addPerson();
                break;
            
            case 2:
                util.deletePerson();
                break;
            
            case 3:
                util.editPersonData();
                break;

            case 4:
                util.sortByLastname();
                break;
            
            case 5:
                util.sortByZip();
                break;

            case 6:
                util.display();
                break;

            case 7:
                return;
    
            default:
                console.log("Invalid Input (Range 1 - 7)");
                
        }
    }
 

}

AddBookMain();