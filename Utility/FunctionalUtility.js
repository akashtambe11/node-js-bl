var read = require('readline-sync');
var algoUtil = require('../Utility/AlgorithmUtility')

module.exports = {

/*========================== PROGRAMMS ========================*/
/*------------------------ Coupon Number ----------------------*/
coupon(size){
    try{
        //Validation
        if(size == null)            throw "Null input are not allowed"
        if(size == 'undefined')     throw "Undefined values are not allowed"
        if(isNaN(size))             throw "String input is not allowed"
        if(size == 0)               throw "Zero input is not allowed"

        var array = [];
        //To take all coupon input from user
        console.log("Enter "+size+" coupons");
        for (let i = 0; i < size; i++){
            array[i] = algoUtil.integerInput();
        }
       
        //To Decide max and min range for random number from an array
        var max = Math.max.apply(null, array);
        var min = Math.min.apply(null, array);
      
        // To find number of Count ittration
        var count = 0;
        var visited = array.length;
         while(visited > 0){
            var ran = this.getRandom(min, max);
            for(let i = 0; i < array.length; i++){
                if(array[i] == ran){
                    count++;
                    visited--;
                    break;
                }
            }
            count++; 
         }
         return count;
    }
    catch(e){
        return e;
    }
},
//External Random function to generate Random Number
getRandom(min, max){
   var random = Math.floor(Math.random() * (max - min + 1 )) + min;
   return random;
},

/*-------------------------- Gambler ------------------------*/

gamblerSimulator(stakes, goals, trials){

    try{
        //Validation
        if(stakes == null || goals == null || trials == null)      throw "Null input are not allowed"
        if(stakes == 'undefined' || goals == 'undefined' || trials == 'undefined')     throw "Undefined values are not allowed"
        if(isNaN(stakes) || isNaN(goals) || isNaN(trials))         throw "String input is not allowed"
        if(stakes == 0 || goals == 0 || trials == 0)               throw "Zero input is not allowed"

        var bet = 0;
        var win = 0;

        for(let i = 0; i < trials; i++){
            var cash = stakes;
            while(cash > 0 && cash < goals ){
                bet++;
                if(Math.random() < 0.5)
                    cash++;
                    else
                    cash--;
            }
        if(cash == goals)
            win++;
        
        }
        //     [index 1,   index 2,               index 3          ]
        return [win, (win/trials)*100, ((trials - win)/trials)*100 ];
    }
    catch(e){
        return e;
    }
        
},

/*----------------------- Harmonic Number --------------------*/

harmonic(nthNumber) {

    try{
        //Validation
        if(nthNumber == null)            throw "Null input are not allowed"
        if(nthNumber == 'undefined')     throw "Undefined values are not allowed"
        if(isNaN(nthNumber))             throw "String input is not allowed"
        if(nthNumber == 0)               throw "Zero input is not allowed"

    }    
    catch(e){
        return e;
    }
        var sum = 0;
        while(nthNumber < 0){
            console.log("Enter POSITIVE nth number Again");
            var nthNumber = algoUtil.integerInput();
        }
        for(let i = 1; i <= nthNumber; i++){
            sum = sum + (1/i);
        }
        return sum;

},

/*------------------------- Leap Year ------------------------*/

isLeapYear(year){
    try{  
            //Validation
            if(year == null)            throw "Null input are not allowed"
            if(year == 'undefined')     throw "Undefined values are not allowed"
            if(isNaN(year))             throw "String input is not allowed"
            if(year == 0)               throw "Zero input is not allowed"
            
    }
    catch(e){
        return e;
    }
        // Computation
        while(year.length < 4 || year > 9999) {
            console.log("\nInvalid Input (Enter 4 Digit year = ");
                var year = algoUtil.integerInput();
            }
            if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
                return true;
            }
            else{
                return false;
            }
  
},
/*----------------------- Prime Factors ---------------------*/
pFactors(num){
    
    try{

            //Validation
            if(num.length == 0)       throw "Null input are not allowed"
            if(num == 'undefined')    throw "Undefined values are not allowed"
            if(isNaN(num))            throw "String input is not allowed"
            if(num == 0)              throw "Zero input is not allowed"
        
        //Computation
        console.log("\nPrime factors are : ")
        for (let i = 2; i < num; i++) {
            while (num % i == 0) {
                console.log(i);
                num = num / i;
            }
        }
        // Case 1 : If number came after while loop then it will be 2
        // case 2 : if not then number will always greater than 2
        if (num > 2)
            console.log(num);
    }
    catch(e){
        console.log("Error : "+e);      
    }
},



/*----------------------- Replace String --------------------*/

replaceString(str, name){
    try{ 
        //Validation
        if(str == "" || name == "")                    throw "Null input are not allowed"
        if(str == 'undefined' || name == 'undefined')  throw "Undefined values are not allowed"
        if(!isNaN(str) || !isNaN(name))                throw "Number input is not allowed"
       
    }
    catch(e){
        return e;
    }
        while(name.length < 3){
            console.log("Username should have atleast 3 Character (Enter Again)");
            var name = algoUtil.stringInput();
        }
        var newString = str.replace("<<UserName>>", name);
        return newString;
},

/*-----------------Sum Of Three Integer Zero------------------*/

sumOfThreeIntZero(array, size){

        //Computation and Print
        var count = 0;
       
            for(let i = 0; i < size; i++){
                for(let j = i+1; j < size; j++){
                    for(let k = j+1; k < size; k++){
                        
                        if(parseInt(array[i]) + parseInt(array[j]) + parseInt(array[k]) == 0){
                            count++;
                            return [array[i], array[j], array[k]];
                            
                        }
                    }
                }
            }
        
        if(count == 0){
            return false;
        }      
},
/*-------------------------- 2D Array -------------------------*/

twoDimArrray(row, column){

    try{
        //Validation
        if(row == null || column == null)      throw "Null input are not allowed"
        if(row == 'undefined' || column == 'undefined')     throw "Undefined values are not allowed"
        if(isNaN(row) || isNaN(column))         throw "String input is not allowed"
        if(row == 0 || column == 0)               throw "Zero input is not allowed"
    }
    catch(e){
        return e;
    }
    // Array for column
    var array = [];
    for(let i = 0; i < row ; i++){
        array[i]=[];
    }
    
    //Input
    for(let i = 0; i < row; i++){
        for(let j = 0; j < column; j++){
            console.log("Enter ["+i+" "+j+"] Element");
            array[i][j] = algoUtil.integerInput();
        }
    }
    //Print
    console.log("Entered Array is = ")
    for(let i = 0; i < row; i++){
        for(let j = 0; j < column; j++){
            console.log(array[i][j]+" ");
        }

    }
},



}