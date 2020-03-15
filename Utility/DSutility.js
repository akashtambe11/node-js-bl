/**
 * @description Dependencies are required to be install before execution of this file.
 */
var algoUtil = require('../Utility/AlgorithmUtility')
var DSdeque = require('../Utility/DSdeQueueUtility')
var DSqueue = require("../Utility/DSqueueUtility");
var DSstack = require('../Utility/DSStackUtility')

module.exports = {
    
    /**
     * @method balencePara() - To balence parathesis using stack operations.
     */
    balencePara(str){ 
        try{ 
             /**
             * @description To handle execeptions.
             */
            if(str == undefined || str == null || str.length == 0)  throw "input should not be undefined or null"
            if(!(/^[()\[\]{}]*$/.test(str)))                        throw "input should be string"
         
            for(let i = 0; i < str.length; i++){

                let letter = str.charAt(i);
                               
                if(letter == '(' || letter == '[' || letter == '{') {
                    DSstack.push(letter);
                                           
                }else{
                    
                    switch(letter){
                        case ')':
                            /**
                             * @description If '(' found on top then remove ). 
                             */
                            if(DSstack.peek() == '(') {
                                DSstack.pop();   
                            }
                            break;
                        
                        case ']':
                             /**
                             * @description If '[' found on top then remove ]. 
                             */
                            if(DSstack.peek() == '[') {
                                DSstack.pop(); 
                            }
                            break;
                    
                        case '}':
                             /**
                             * @description If '{' found on top then remove }. 
                             */
                            if(DSstack.peek() == '{') {
                                DSstack.pop(); 
                            }
                            break;
                    }
                }   
            }
          
            if(DSstack.top == -1){
                return true;
            }
            else{
                return false;
            }
        }

        catch(e){
              return e;
        }    
    },
    
    /**
     * @method bankCounter() - To perform bank transaction using queue operation.
     */
    bankCounter(people, bankAmount) {
        console.log(DSqueue.rear);
        try{ 
             /**
             * @description To handle execeptions.
             */
            if(people == undefined || people == null || people.length == 0 || bankAmount == undefined || bankAmount == null || bankAmount.length == 0)   
                                                                throw "input should not be undefined or null"
            if(isNaN(people) || isNaN(bankAmount))              throw "input should be number"

                var totalAmmount = bankAmount, money, personCount = 1;
      
                /**
                 * @description for loop to make a queue
                 */
                for(let i = 0; i < people; i++){
                    DSqueue.enqueue(i);
                }
               
                while(people > 0) {
                    
                    console.log(`\n\n===> TRANSACTION FOR PERSON: ${personCount} \n`);
                    
                    console.log("1. Deposit Money");
                    console.log("2. Withdraw Money");

                    console.log("\nEnter your choice");
                    var choice = parseInt(algoUtil.integerInput());
                    /**
                     * @description To handle user input (must be 1 or 2)
                     */
                    while(choice <= 0 || choice >2) {
                        console.log("\nInvalid Choice (Enter Again)");
                        var choice = parseInt(algoUtil.integerInput());
                    }
                    
                    switch(choice){
                        case 1:
                            console.log("\nEnter money to Deposit");
                            money = parseInt(algoUtil.integerInput());

                            totalAmmount = totalAmmount + money;
                            console.log("\nUpdated Ammount of Bank: "+totalAmmount);
                            break;
                        
                        case 2:
                            console.log("\nEnter money to Withdraw");
                            money = parseInt(algoUtil.integerInput());

                            if(totalAmmount >= money){
                                totalAmmount = totalAmmount - money;
                                console.log("\nUpdated Ammount of Bank: "+totalAmmount);
                            }else{
                                console.log("\nInsufficient Balance in Bank");
                                
                            }
                            break;
                        
                        default:
                            console.log("\nInvalid Input (Range 1 - 2)");
                            break;
                                
                    }
                    people--;
                    personCount++;
                    DSqueue.dequeue();
                }
                console.log("\nQueue has been ended");
                
        }
        catch(e){
            return e;
        } 
    },

    
    /**
     * @method calender() - To draw month view of calender.
     */
    calender(month, year){
        /**
        * @description To handle execeptions.
        */
        try{ 
     
            if(month == undefined || month == null || month.length == 0 || year == undefined || year == null || year.length == 0)   
                                                         throw "input should not be undefined or null"
            if(isNaN(month) || isNaN(year))              throw "input should be number"

                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septmber", "October", "November", "December"];
                var totalDays = [31,28,31,30,31,30,31,30,31,30,31,30];

                if(month == 2 && this.isLeapYear(year)){
                    totalDays[month-1] = 29;
                }
            
                console.log("\n      "+months[month-1]+" "+year+"\n__________________________");;
                console.log("Su  Mo  Tu  We  Th  Fr  Sa ");
                
                var day = algoUtil.dayOfWeek(1, month, year);
                
                /**
                 * @description To print Blank Space before months first Day starts.
                 */
                for(let i = 0; i < day; i++){
                    process.stdout.write("    ");
                }
    
                 /**
                 * @description Printing days of Months.
                 */
                for(let i = 1; i < totalDays[month-1]; i++){
                    process.stdout.write(i+"  ");
                    
                    /**
                     * @description 1 - 9 numbers have one digit, hence Extra space is needed.
                     */
                    if(i < 10){
                        process.stdout.write(" ");
                    }
                    if(((i + day) % 7 == 0 || (i == totalDays[month-1]))){
                        console.log("  ");    
                    }
                }
        }
        catch(e){
            return e;
        } 
  
    },

    
    /**
     * @method isAnagram() - To check two strings are anagram or not.
     */
    isAnagram(str1, str2){
        try{
        /**
        * @description To handle execeptions.
        */  
         if(str1 == undefined || str2 == undefined || str1 == null || str2 == null || str1.length == 0 || str2.length == 0)                 
                                 throw "input should not be undefined or null"
            /**
             * @description To find length of two string is equal or not.
             */
            if(str1.length == str2.length){
                 var str1Sort = str1.split("").sort().join();
       
                 var str2Sort = str2.split("").sort().join();
                     
                     /**
                     * @description To check two strings are equal or not.
                     */
                     if(str1Sort == str2Sort){
                         return true;
                     }
                     else{
                         return false;
                     }
            }
            else{
                     return false;
            } 
         }
         catch(e){
             return e;
         }
     
     },

    /**
     * @method isLeapYear() - To determine whether entered year is leap or not.
     */
    isLeapYear(year){

        try{ 
            /**
            * @description To handle execeptions.
            */
            if(year == undefined || year == null || year.length == 0)   
                                         throw "input should not be undefined or null"
            if(isNaN(year))              throw "input should be number"

                /**
                * @description To Check Enter year is leap year or not.
                */
                if (year % 4 == 0 && year % 100 != 0 || year % 400 == 00) {
                    return true;
                } else {
                    return false;
                }
             
        }
        catch(e){
            return e;
        }

    },

    /**
     * @method palindromeChecker() - To check entered two strings are palindrome or not.
     */
    palindromeChecker(str, n){
        try{
            /**
            * @description To handle execeptions.
            */
            if(str == undefined || str == null || str.length == 0 || n == undefined || n == null || n.length == 0)   
                                         throw "input should not be undefined or null"
            
                for(let m = 0; m < n; m++){
                    if(m == 0){
                        /**
                         * @description Calling enqueFront function from DSdeQueueUtility file.
                         */
                        DSdeque.enqueFront(str[m], n)
                    }
                    else{
                        /**
                        * @description Calling enqueFront function from DSdeQueueUtility file.
                        */
                        DSdeque.enqueRear(str[m], n)
                    }
                }
        }
        catch(e){
            return e;
        }
        

        var i = DSdeque.front;
        var j = DSdeque.rear;
        var check = false;

        /**
         * @description To remove elements from both sides at a same time to check whether they are equal or not.
         */
        while(i < j){
            if(DSdeque.deQueue[i] == DSdeque.deQueue[j]){
                check = true;
                break;
            }
            i++;
            j--;
        }

        if(check == true)
                return true;
            else
                return false;
    },
    
    /**
     * @method primeRange() - To find out prime range.
     */
    primeRange(range){
        try{ 
            /**
            * @description To handle execeptions.
            */
            if(range == undefined || range == null || range.length == 0)   
                                         throw "input should not be undefined or null"
            if(isNaN(range))              throw "input should be number"

                var primeArray = [];
            
                for(let i = 0; i <= range; i++){
                    /**
                     * @method isPrime() - To find out whether number is prime or not.
                     */
                    var primePass = algoUtil.isPrime(i);

                    /**
                     * @description [index 1 = true & index 1 = num (Used index 0 as we need only boolean Value)]
                     */                
                    if(primePass[0]){
                            primeArray.push(primePass[1])
                            
                    }
                }
                return primeArray;
        }
        catch(e){
            return e;
        }

    }
 
}
