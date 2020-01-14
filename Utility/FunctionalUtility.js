/** 
*@description Dependencies require to be installed before the execution of this file.
*@var algoUtil, test imports other files for execution of program.
*/
var read = require('readline-sync');
var algoUtil = require('../Utility/AlgorithmUtility')

module.exports = {

/*------------------------ Coupon Number ----------------------*/
coupon(size){

    try{

        /**
         * @description To handle exception and if found then trow specific custom error.
         */
        if(size == null)            throw "Null input are not allowed"
        if(size == 'undefined')     throw "Undefined values are not allowed"
        if(isNaN(size))             throw "String input is not allowed"
        if(size == 0)               throw "Zero input is not allowed"
        
        /**
         * @description array is initialized with a size of 0.
         * @var {Array} array.
         */
        var array = [];
       
        console.log("Enter "+size+" coupons");
        for (let i = 0; i < size; i++){
            array[i] = algoUtil.integerInput();
        }

        /**
         * @description To Decide max and min range for random number from an array.
         * @var {number} max,min.
         */
        var max = Math.max.apply(null, array);
        var min = Math.min.apply(null, array);
      
        /**
         * @description count is used as counters to get total number of random ittration.
         * @var {Number} count
         */
        var count = 0;

        /**
         * @description Visited is used to check wether loop visted all array element index.
         * @var {Number} visited
         */
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

/**
 * @description External Random function to generate Random Number and to return the values.
 */
getRandom(min, max){
   var random = Math.floor(Math.random() * (max - min + 1 )) + min;
   return random;
},

/*-------------------------- Gambler ------------------------*/

gamblerSimulator(stakes, goals, trials){

    try{

        /**
         * @description To handle exception and if found then trow specific custom error.
         */
        if(stakes == null || goals == null || trials == null)      throw "Null input are not allowed"
        if(stakes == 'undefined' || goals == 'undefined' || trials == 'undefined')     throw "Undefined values are not allowed"
        if(isNaN(stakes) || isNaN(goals) || isNaN(trials))         throw "String input is not allowed"
        if(stakes == 0 || goals == 0 || trials == 0)               throw "Zero input is not allowed"
        
        /**
         * @description bet and win is initialized with 0.
         * @var {number} bet, win.
        */
        var bet = 0;
        var win = 0;

        /**
         * @description To perform loop until it reaches to trail value
         */
        for(let i = 0; i < trials; i++){
            var cash = stakes;
            while(cash > 0 && cash < goals ){
                bet++;

        /**
         * @description To get random number to increase or decrease cash amount
         */
                if(Math.random() < 0.5)
                    cash++;
                    else
                    cash--;
            }
        if(cash == goals)
            win++;
        
        }

        /**
         * @description return values in the form of array
         *     [index 1,   index 2,               index 3          ]
         */ 
        return [win, (win/trials)*100, ((trials - win)/trials)*100 ];
    }
    catch(e){
        return e;
    }
        
},

/*----------------------- Harmonic Number --------------------*/

harmonic(nthNumber) {

    try{

        /**
        *@description To handle exception and if found then trow specific custom error.
        */
        if(nthNumber == null)            throw "Null input are not allowed"
        if(nthNumber == 'undefined')     throw "Undefined values are not allowed"
        if(isNaN(nthNumber))             throw "String input is not allowed"
        if(nthNumber == 0)               throw "Zero input is not allowed"

    }    
    catch(e){
        return e;
    }

        /**
         * @description sum is initialized with 0.
         * @var {number} sum.
        */
        var sum = 0;

        /**
         * @description To handle exception and if found then trow specific custom error. 
         */
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
            /**
            *@description To handle exception and if found then trow specific custom error.
            */
            if(year == null)            throw "Null input are not allowed"
            if(year == 'undefined')     throw "Undefined values are not allowed"
            if(isNaN(year))             throw "String input is not allowed"
            if(year == 0)               throw "Zero input is not allowed"
            
    }
    catch(e){
        return e;
    }
        /**
         * @description Loop will perform until user enter a year which is geater than 3
         * and less than 9999. 
         */
        while(year.length < 4 || year > 9999) {
            console.log("\nInvalid Input (Enter 4 Digit year = ");
                var year = algoUtil.integerInput();
            }

            /**
             * @description To determine Leap Year, then year should be divsible by 4 and
             * cannot devisible by 100 or year should be divisible by 400
             */
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

            /**
            *@description To handle exception and if found then trow specific custom error.
            */
            if(num.length == 0)       throw "Null input are not allowed"
            if(num == 'undefined')    throw "Undefined values are not allowed"
            if(isNaN(num))            throw "String input is not allowed"
            if(num == 0)              throw "Zero input is not allowed"
        
        /**
         * @description Loop will contiune until num is divisible by i itration value,
         * and if condition get satisfy then it will print current 'i' value,
         * also num will be divide by same 'i' value
         */
        console.log("\nPrime factors are : ")
        for (let i = 2; i < num; i++) {
            while (num % i == 0) {
                console.log(i);
                num = num / i;
            }
        }

        /**
         * @description  Case 1 : If number came after while loop then it will be 2
         *               Case 2 : if not then number will always greater than 2
         */
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
        /**
        *@description To handle exception and if found then trow specific custom error.
        */
        if(str == "" || name == "")                    throw "Null input are not allowed"
        if(str == 'undefined' || name == 'undefined')  throw "Undefined values are not allowed"
        if(!isNaN(str) || !isNaN(name))                throw "Number input is not allowed"
       
    }
    catch(e){
        return e;
    }
        /**
         * @description Loop will perform until user enter a string having atleast length 3
         */
        while(name.length < 3){
            console.log("Username should have atleast 3 Character (Enter Again)");
            var name = algoUtil.stringInput();
        }

        /**
         * @description string name is replaced by <<UserName>> and string str get modified,
         *  and it will get store in string newString.
         */
        var newString = str.replace("<<UserName>>", name);
        return newString;
},

/*-----------------Sum Of Three Integer Zero------------------*/

sumOfThreeIntZero(array, size){

         /**
         * @description count is initialized with 0.
         * @var {number} count.
         */
        var count = 0;
       
            for(let i = 0; i < size; i++){
                for(let j = i+1; j < size; j++){
                    for(let k = j+1; k < size; k++){

                        /**
                         * @description If additon of three array element is zero then,
                         * it will return value
                         * @return If above condition satisfied then it will return all three 
                         * current array
                         */
                        if(parseInt(array[i]) + parseInt(array[j]) + parseInt(array[k]) == 0){
                            count++;
                            return [array[i], array[j], array[k]];
                            
                        }
                    }
                }
            }
        /** 
         * @description Count value will remain 0 if the if condtion in for loop does not execute
         * @return It will return false, if sum of three array element is not zero
         */
        if(count == 0){
            return false;
        }      
},
/*-------------------------- 2D Array -------------------------*/

twoDimArrray(row, column){

    try{
        /**
        *@description To handle exception and if found then trow specific custom error.
        */
        if(row == null || column == null)      throw "Null input are not allowed"
        if(row == 'undefined' || column == 'undefined')     throw "Undefined values are not allowed"
        if(isNaN(row) || isNaN(column))         throw "String input is not allowed"
        if(row == 0 || column == 0)               throw "Zero input is not allowed"
    }
    catch(e){
        return e;
    }
       
    /**
     * @description array is initialized with a size of 0.
     * @var {Array} array.
     */
    var array = [];
    for(let i = 0; i < row ; i++){
        array[i]=[];
    }
    
    /**
     * @description First loop will run until row value and second loop will run until
     * end of column value
     */
    for(let i = 0; i < row; i++){
        for(let j = 0; j < column; j++){
            console.log("Enter ["+i+" "+j+"] Element");
            array[i][j] = algoUtil.integerInput();
        }
    }
    /**
     * @description To print all entered elements.
     */
    console.log("Entered Array is = ")
    for(let i = 0; i < row; i++){
        for(let j = 0; j < column; j++){
            console.log(array[i][j]+" ");
        }

    }
},

}