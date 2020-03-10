var fs = require('fs');
var read = require('readline-sync');
var algoUtil = require('../Utility/AlgorithmUtility')


class AddressBook {
    constructor() {
        var jsonData = fs.readFileSync(__dirname + "/JsonFiles/AddressBook.json");
        this.data = JSON.parse(jsonData);
        
    }


    displayData() {
        console.log(this.data);
        
    }


    addPerson() {
        console.log("\n***** ADD PERSON ***** \nEnter ID");
        var Id = algoUtil.integerInput();

        console.log("\nEnter Person's First Name to ADD");;
        var firstName = algoUtil.stringInput().toLowerCase();

        console.log("\nEnter Person's Last Name");;
        var lastName = algoUtil.stringInput().toLowerCase();

        console.log("\nEnter City");
        var city = algoUtil.stringInput().toLowerCase();

        console.log("\nEnter State");
        var state = algoUtil.stringInput().toLowerCase();

        console.log("\nEnter ZIP Code");
        var zipCode = algoUtil.integerInput();
        while(zipCode.length != 6){
            console.log("\nEnter ZIP Code Again (6 Digit Only)");
            var zipCode = algoUtil.integerInput();
        }

        //Push data in AddressBook.js
        this.data.person.push({
                "Id":parseInt(Id),
                "firstName":firstName,
                "lastName":lastName,
                "city":city,
                "state":state,
                "zipCode":parseInt(zipCode)
        })
        fs.writeFileSync(__dirname + "/JsonFiles/AddressBook.json", JSON.stringify(this.data));

    }


    deletePerson() {
        console.log("\n***** DELETE PERSON ***** \nEnter Person's First Name to DELETE");;
        var firstName = algoUtil.stringInput().toLowerCase();
        var found = false;
        
        for(let i in this.data.person) {
            if(this.data.person[i].firstName == firstName) {
                    this.data.person.splice(i,1);
                    found = true;
            }
        }
        
        if(!found) {
            console.log(`\nPerson Name with "${firstName}" is NOT in List`);  
        }

        fs.writeFileSync(__dirname + "/JsonFiles/AddressBook.json", JSON.stringify(this.data));
    }


    editPersonData() {
        console.log("\n***** EDIT PERSON ***** \nEnter Person's First Name to Search for EDIT data");;
        var firstName = algoUtil.stringInput().toLowerCase();
        var found = false;

        for(var i in this.data.person) {
            if(this.data.person[i].firstName == firstName) {
                    found = true;
                    console.log(`\nPerson FOUND \nEdit "${firstName}" Data`);
                    break;
                    
            }
        }

        if(!found) {
            console.log(`\nPerson Name with "${firstName}" is NOT in List`); 
            return; 
        }

        while(true) {
            //Edit Data
            console.log("\n1. Edit Id. \n2. Edit First Name. \n3. Edit Last Name. \n4. Edit City. \n5. Edit State. \n6. Edit Zip Code. \n7. Back to Main Menu");

            console.log("\nEnter your Choice");
            var choice = parseInt(algoUtil.integerInput());

            switch(choice){

                case 1:
                    console.log("\nEnter ID");
                    let newId = algoUtil.integerInput();
                    this.data.person[i].Id = parseInt(newId);
                    break;
                
                case 2:
                    console.log("\nEnter Person's First Name");;
                    var newFirstName = algoUtil.stringInput().toLowerCase();
                    this.data.person[i].firstName = newFirstName;
                    break;
                
                case 3:
                    console.log("\nEnter Person's Last Name");;
                    var newLastName = algoUtil.stringInput().toLowerCase();
                    this.data.person[i].lastName = newLastName;
                    break;

                case 4:
                    console.log("\nEnter City");
                    var NewCity = algoUtil.stringInput().toLowerCase();
                    this.data.person[i].city = NewCity;
                    break;
                
                case 5:
                    console.log("\nEnter State");
                    var newState = algoUtil.stringInput().toLowerCase();
                    this.data.person[i].state = newState;
                    break;

                case 6:
                    console.log("\nEnter ZIP Code");
                    var newZipCode = algoUtil.integerInput();
                    while(newZipCode.length != 6) {
                        console.log("\nEnter ZIP Code Again (6 Digit Only)");
                        var newZipCode = algoUtil.integerInput();
                    }
                    this.data.person[i].zipCode = parseInt(newZipCode);
                    break;

                case 7:
                    return;
        
                default:
                    console.log("Invalid Input (Range 1 - 7)");
                    
            }
            fs.writeFileSync(__dirname + "/JsonFiles/AddressBook.json", JSON.stringify(this.data));
        }
    }


    sortByLastname() {
        for(let i = 0; i < this.data.person.length; i++) {
            for(let j = 0; j < this.data.person.length - 1; j++) {
                /**
                 * @description Sorting for Strings (.localCompare): str1.localeCompare(str2)
                 *              The localeCompare method returns a number indicating whether str1 comes before, 
                 *              after or is the same as str2 in sort order.
                 *                  Returns -1 if str1 is sorted before str2
                 *                  Returns 0 if the two strings are equal
                 *                  Returns 1 if str1 is sorted after str2
                 */
                
                if (this.data.person[j].lastName.localeCompare(this.data.person[j + 1].lastName) == 1) {
                     let temp = this.data.person[j];
                     this.data.person[j] = this.data.person[j + 1];
                     this.data.person[j + 1] = temp;
                }
            }
        }
        fs.writeFileSync(__dirname + "/JsonFiles/AddressBook.json", JSON.stringify(this.data));
    }

    sortByZip() {
        for(let i = 0; i < this.data.person.length; i++) {
            for(let j = 0; j < this.data.person.length - 1; j++) {

                if (this.data.person[j].zipCode > this.data.person[j + 1].zipCode) {
                     let temp = this.data.person[j];
                     this.data.person[j] = this.data.person[j + 1];
                     this.data.person[j + 1] = temp;
                }
            }
        }
        fs.writeFileSync(__dirname + "/JsonFiles/AddressBook.json", JSON.stringify(this.data));
    }

    display() {
        console.log(`\n----- Person Details -----`)
        for(let i in this.data.person){
            
            console.log("_______________________"
                        +"\nId          :"+this.data.person[i].Id
                        +"\nFirst Name :"+this.data.person[i].firstName
                        +"\nLast Name  :"+this.data.person[i].lastName
                        +"\nCity       :"+this.data.person[i].city
                        +"\nState      :"+this.data.person[i].state
                        +"\nZip Code   :"+this.data.person[i].zipCode
            );
            


            // console.log(`Id        : ${this.data.person[i].Id}
            //             First Name: ${this.data.person[i].firstName}
            //             Last Name : ${this.data.person[i].lastName}
            //             City      : ${this.data.person[i].city}
            //             State     : ${this.data.person[i].state}
            //             Zip Code  ; ${this.data.person[i].zipCode}
            // `);
           
            
        }
    }
}

module.exports = new AddressBook();