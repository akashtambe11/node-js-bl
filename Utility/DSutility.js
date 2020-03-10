var algoUtil = require('../Utility/AlgorithmUtility')
var DSdeque = require('../Utility/DSdeQueueUtility')
var DSqueue = require("../Utility/DSqueueUtility");
var DSstack = require('../Utility/DSStackUtility')

module.exports = {
    
    balencePara(str){ 
        try{ 
            if(str == undefined || str == null || str.length == 0)  throw "input should not be undefined or null"
            // if(!(/^[a-zA-Z]+$/.test(str)))                          throw "input should be string"
         
            for(let i = 0; i < str.length; i++){

                let letter = str.charAt(i);
                               
                if(letter == '(' || letter == '[' || letter == '{') {
                    DSstack.push(letter);
                                           
                }else{
                    
                    switch(letter){
                        case ')':
                            if(DSstack.peek() == '(') {
                                DSstack.pop();   
                            }
                            break;
                        
                        case ']':
                            if(DSstack.peek() == '[') {
                                DSstack.pop(); 
                            }
                            break;
                    
                        case '}':
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
    

    //Bank cash counter
    bankCounter(people, bankAmount) {

        try{ 
     
            if(people == undefined || people == null || people.length == 0 || bankAmount == undefined || bankAmount == null || bankAmount.length == 0)   
                                                                throw "input should not be undefined or null"
            if(isNaN(people) || isNaN(bankAmount))              throw "input should be number"

                var totalAmmount = bankAmount, money, personCount = 1;
                //for loop to make a queue
                for(let i = 0; i < people; i++){
                    DSqueue.enqueue(i);
                }
                while(people > 0) {
                    console.log(`TRANSACTION FOR PERSON: ${personCount} \n`);
                    
                    console.log("1. Deposit Money");
                    console.log("2. Withdraw Money");

                    console.log("\nEnter your choice");
                    var choice = parseInt(algoUtil.integerInput());
                    
                    switch(choice){
                        case 1:
                            console.log("\nEnter money to Deposit");
                            money = parseInt(algoUtil.integerInput());
                            this.depositMoney(totalAmmount, money)
                            break;
                        
                        case 2:
                            console.log("\nEnter money to Withdraw");
                            money = parseInt(algoUtil.integerInput());
                            this.withdrawMoney(totalAmmount, money)
                            break;
                        
                        default:
                            console.log("\nInvalid Input (Range 1 - 2)");
                            break;
                                
                    }
                    people--;
                    personCount++;
                }
             
        }
        catch(e){
            return e;
        } 

        

    },

    depositMoney(totalAmmount, money) {

        try{ 
     
            if(totalAmmount == undefined || totalAmmount == null || totalAmmount.length == 0 || money == undefined || money == null || money.length == 0)   
                                                                throw "input should not be undefined or null"
            if(isNaN(totalAmmount) || isNaN(money))             throw "input should be number"
             
                totalAmmount = totalAmmount + money;
                console.log("\nUpdated Ammount of Bank: "+totalAmmount);
        }
        catch(e){
            return e;
        } 
       

    },
    
    withdrawMoney(totalAmmount, money) {

        try{ 
     
            if(totalAmmount == undefined || totalAmmount == null || totalAmmount.length == 0 || money == undefined || money == null || money.length == 0)   
                                                                throw "input should not be undefined or null"
            if(isNaN(totalAmmount) || isNaN(money))             throw "input should be number" 
                
                if(totalAmmount >= money){
                    totalAmmount = totalAmmount - money;
                    console.log("\nUpdated Ammount of Bank: "+totalAmmount);
                }else{
                    console.log("\nInsufficient Balance in Bank");
                    
                }
             
        }
        catch(e){
            return e;
        } 
        
    },
    

    //Month View Calender
    calender(month, year){

        try{ 
     
            if(month == undefined || month == null || month.length == 0 || year == undefined || year == null || year.length == 0)   
                                                         throw "input should not be undefined or null"
            if(isNaN(month) || isNaN(year))              throw "input should be number"

                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septmber", "October", "November", "December"];
                var totalDays = [31,28,31,30,31,30,31,30,31,30,31,30];
        }
        catch(e){
            return e;
        } 
        

            if(month == 2 && this.isLeapYear(year)){
                totalDays[month-1] = 29;
            }
            // console.log(totalDays[month-1]);
        
            console.log("\n      "+months[month-1]+" "+year+"\n__________________________");;
            console.log("Su  Mo  Tu  We  Th  Fr  Sa ");
            
            var day = algoUtil.dayOfWeek(1, month, year);
            
            //To print Blank Space before months first Day starts
            for(let i = 0; i < day; i++){
                process.stdout.write("    ");
            }

            //Printing days of Months
            for(let i = 1; i < totalDays[month-1]; i++){
                process.stdout.write(i+"  ");
                
                //1 - 9 numbers have one digit, hence Extra space is needed
                if(i < 10){
                    process.stdout.write(" ");
                }
                if(((i + day) % 7 == 0 || (i == totalDays[month-1]))){
                    console.log("  ");    
                }
            }
        
    },



    isAnagram(str1, str2){
        try{
             
         if(str1 == undefined || str2 == undefined || str1 == null || str2 == null || str1.length == 0 || str2.length == 0)                 
                                 throw "input should not be undefined or null"
    
            if(str1.length == str2.length){
                 var str1Sort = str1.split("").sort().join();
       
                 var str2Sort = str2.split("").sort().join();

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


    isLeapYear(year){

        try{ 
     
            if(year == undefined || year == null || year.length == 0)   
                                         throw "input should not be undefined or null"
            if(isNaN(year))              throw "input should be number"

                // To Check Enter year is leap year or not?
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

    palindromeChecker(str, n){
        try{
            if(str == undefined || str == null || str.length == 0 || n == undefined || n == null || n.length == 0)   
                                         throw "input should not be undefined or null"
            
                for(let m = 0; m < n; m++){
                    if(m == 0){
                        DSdeque.enqueFront(str[m], n)
                    }
                    else{
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
    
    primeRange(range){
        try{ 
     
            if(range == undefined || range == null || range.length == 0)   
                                         throw "input should not be undefined or null"
            if(isNaN(range))              throw "input should be number"

                var primeArray = [];
            
                for(let i = 0; i <= range; i++){
                    var primePass = algoUtil.isPrime(i);
                    //[index 1 = true & index 1 = num (Used index 0 as we need only boolean Value)]
                    if(primePass[0]){
                        //
                            primeArray.push(primePass[1])
                            // console.log(i); 
                    }
                }
                return primeArray;
        }
        catch(e){
            return e;
        }

    }
 
}
