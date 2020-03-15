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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/AddressBookUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

/**
 * @description The main function is written to maintain Address book in json file.
 */
AddBookMain = () => {

    /**
     * @description Condition must be reamin true until user exit from process.
     */
    while(true) {

        console.log("\n***** MAIN MENU ***** \n1. Add Person. \n2. Delete Person. \n3. Edit Person Data \n4. Sort by Last Name. \n5. Sort by Zip.  \n6. Display. \n7. LOG OUT");

        console.log("\nEnter your Choice");
        var choice = parseInt(algoUtil.integerInput());

        switch(choice){

            case 1:
                /**
                * @description Calling addPerson method from AddressBookUtility File.
                */
                util.addPerson();
                break;
            
            case 2:
                /**
                * @description Calling deletePerson method from AddressBookUtility File.
                */
                util.deletePerson();
                break;
            
            case 3:
                /**
                * @description Calling editPersonData method from AddressBookUtility File.
                */
                util.editPersonData();
                break;

            case 4:
                /**
                * @description Calling sortByLastname method from AddressBookUtility File.
                */
                util.sortByLastname();
                break;
            
            case 5:
                /**
                * @description Calling sortByZip method from AddressBookUtility File.
                */
                util.sortByZip();
                break;

            case 6:
                /**
                * @description Calling display method from AddressBookUtility File.
                */
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