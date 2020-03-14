/**
 * @description Dependencies are required to be install before execution of this file.
 */
var read = require('readline-sync');
var fs = require('fs');



module.exports = {

    /**
     * @description Various method to be used through out all programs.
     */

    /**
     * @method integerInput() - To take input as integer.
     */
    integerInput(){
        let num =read.question("").trim();
        while(isNaN(num) || num.length == 0){
                num = read.question("\nInvalid Integer Input (Enter Again) = ").trim();
        }
        return num;       
    },

    /**
     * @method stringInput() - To take string as integer.
     */
    stringInput(){
        let str = read.question("").trim();
        while(!(/^[a-zA-Z]+$/.test(str)) || str.length == 0){
            str = read.question("\nInvalid String Input (Enter Again) = ").trim();
        }
        return str;
    },

    /**
     * @method arrayIntElementInput() - To take integer input in an Array.
     */
    arrayIntElementInput(size){
        try{
            /**
             * @description To handle exception and if found then trow specific custom error.
             */
            if(size == undefined || size == null || size.length == 0)              throw "input should not be undefined or null"
            if(isNaN(size))                                                        throw "input should be number"     
            
        }
        catch(e){
            return e;
        }
                console.log("\nEnter "+size+" Integer Elements");
                var array = [];
                for(let i = 0; i < size; i++){
                    array[i] = parseInt(this.integerInput());   
                }
                return array; 
    },

    /**
     * @method arrayStrElementInput() - To take string input in an Array.
     */
    arrayStrElementInput(size){
        try{
            /**
             * @description To handle exception and if found then trow specific custom error.
             */
            if(size == undefined || size == null || size.length == 0)              throw "input should not be undefined or null"
            if(isNaN(size))                                                        throw "input should be number"     
            
        }
        catch(e){
            return e;
        }

        console.log("\nEnter "+size+" String Elements");
        var array = [];
        for(let i = 0; i < size; i++){
            array[i] = this.stringInput();   
        }
        return array;
    },

    /**
     * @method isLeapYear() - To check year is leap or not.
     */
    isLeapYear(year){

        try{ 
    
            if(year == undefined || year == null || year.length == 0)   
                                        throw "input should not be undefined or null"
            if(isNaN(year))              throw "input should be number"
            
        }
        catch(e){
            return e;
        }

        /**
         * @description Condtion to check leap year
         */
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 00) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * @method isPrime() - To check number is prime or not.
     */
    isPrime(num){
        try{
            /**
             * @description To handle exception and if found then trow specific custom error.
             */
            if(num == undefined || num == null || num.length == 0)                throw "input should not be undefined or null"
            if(isNaN(num))                                                        throw "input should be number"     
            
        }
        catch(e){
            return e;
        }

        var count = 0;
        for(let i = 1; i <= num; i++){
            if(num % i == 0){
                count++;
            }
        }
        if(count == 2){ 

            /**
             * @description [Index 0, Index 1]
             */
            return [true, num];
        }else{
            return false;
        }
    },

    /**
     * @method isPalindrome() - To check number is palindrome or not.
     */
    isPalindrome(num){
        try{
            /**
             * @description To handle exception and if found then trow specific custom error.
             */
            if(num == undefined || num == null || num.length == 0)              throw "input should not be undefined or null"
          
            
        }
        catch(e){
            return e;
        }

        console.log("\nPrime number which are also PALINDROM")
        var paliArray = [];

        for(let i = 0; i < num.length; i++){
        var temp = num[i];
        var rem, revNumber = 0;

            while(num[i] > 0){
                rem =num[i] % 10;
                revNumber = revNumber * 10 + rem;
                num[i] = parseInt(num[i] / 10);
            }

            if (revNumber == temp){
                paliArray.push(temp);
            }
        } 
        return paliArray;
    },




    /**
     * @description Algorithm Programs starts from Here.
     */

    /**
     * @method isAnagram() - To check string is anagram or not.
     */
    isAnagram(str1, str2){
    try{
            
        if(str1 == undefined || str2 == undefined || str1 == null || str2 == null || str1.length == 0 || str2.length == 0)                 
                                throw "input should not be undefined or null"
        if(!(/^[a-zA-Z]+$/.test(str1)) || !(/^[a-zA-Z]+$/.test(str2)))      
                                throw "input should be string"

            //To removing all spaces
            var str1trim = str1.replace(/\s/g,'');
            var str2trim = str2.replace(/\s/g,'');
            
            if(str1trim.length == str2trim.length){
                var str1Sort = str1trim.toLowerCase().split('').sort().join('');
                var str2Sort = str2trim.toLowerCase().split('').sort().join('');
                    if(str1Sort == str2Sort){
                        return true;
                    }else{
                        return false;
                    }
            }else{
                    return false;
            } 
        }
        catch(e){
            return e;
        }
    },

    /**
     * @method toBinary() - To convert number to binary expression.
     */
    toBinary(num){
        try{
            /**
             * @description To handle exception and if found then trow specific custom error.
             */
            if(num == undefined || num == null || num.length == 0)              throw "input should not be undefined or null"
            if(isNaN(num))                                                      throw "input should be number"     
            
            var rem = 0, binary = 0, i = 1;
            while(num > 0){
                rem = parseInt(num % 2);
                binary = parseInt(binary + rem * i);
                num = parseInt(num / 2);
                i = i * 10;  
            }
            return binary;
        }
        catch(e){
            return e;
        }
    },

    /**
     * @method binarySearchInteger() - To perform binary search on integer.
     */
    binarySearchInteger(array, key){
        try{
            /**
             * @description To handle exception and if found then trow specific custom error.
             */
            if(array == undefined || key == undefined || array == null || key == null || array.length == 0 || key.length == 0)    
                                throw "input should not be undefined or null"
            if(isNaN(key))                
                                throw "input should be number"
            
            var low = 0;
            var high = array.length - 1;
            var mid = parseInt((low + high)/2);
            
            while(low <= high){

                if(key == array[mid]){
                    return true;
                }else if(key > array[mid]){
                    low =parseInt(mid + 1);
                    mid = parseInt((low + high)/2);
                }else{
                    high = parseInt(mid - 1);
                    mid = parseInt((low + high)/2);
                }   
            }
            
            if (low > high){
                return false;   
            }

        }
        catch(e){
            return e;
        }
        
    },

    /**
     * @method binarySearchString() - To perform binary search on string.
     */
    binarySearchString(array, key){
        try{
            /**
             * @description To handle exception and if found then trow specific custom error.
             */
            if(array == undefined || key == undefined || array == null || key == null || array.length == 0 || key.length == 0)    
                        throw "input should not be undefined or null"
            if(!isNaN(key))                
                        throw "input key should be string"

            var low = 0;
            var high = array.length - 1;
            var mid = parseInt((low + high)/2);
            
            while(low <= high){

                if(key == array[mid]){
                    return true;
                }else if(key > array[mid]){
                    low =parseInt(mid + 1);
                    mid = parseInt((low + high)/2);
                }else{
                    high = parseInt(mid - 1);
                    mid = parseInt((low + high)/2);
                }   
            }
            if (low > high){
                return false;
            }
        
        }
        catch(e){
            return e;
        }
       
    },

    /**
     * @method binSearchStringFile() - To perform binary search on string.
     */
    binSearchStringFile(name){
        try{
            
            if(name == undefined || name == null || name.length == 0 || name == '')                 
                                                throw "input should not be undefined or null"
            if(!(/^[a-zA-Z]+$/.test(name)))      throw "input should be string"

            var data = fs.readFileSync(__dirname+'/TextFiles/BinSearchStringFile.txt', 'utf-8'); 
            var array = data.split(", ").sort();
        
            if(this.binarySearchString(array, name)){
                console.log(`\nFruit Name '${name}' FOUND in File`); 
            }else {
                console.log(`\nFruit Name '${name}' does NOT found in File`); 
            }

        }
        catch(e){
            console.log(e); 
        } 
        
    },

    /**
     * @method bubleSortInteger() - To perform bubble search on integer.
     */
    bubleSortInteger(array){
        try{
    
            for(let i = 0; i < array.length; i++){
                if(array[i] == undefined || array[i] == null)              
                                        throw "input should not be undefined or null"
                if(isNaN(array[i]))     throw "input should be number"    
            }
        }
        catch(e){
            return e;
        }
        
        /**
         * @description Sorting Computation
         */
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array.length - i; j++){
                if(array[j] > array[j + 1]){
                    var temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1]= temp;
                }
            }
        }
        return array;
    },

    /**
     * @method bubleSortString() - To perform bubble search on string.
     */
    bubleSortString(array){
        try{
            for(let i = 0; i < array.length; i++){
                if(array[i] == undefined || array[i] == null)              
                                        throw "input should not be undefined or null"
                if(!isNaN(array[i]))    throw "input should be string"
            }
        }
        catch(e){
            return e;
        }
        
        /**
         * @description Sorting Computation
         */
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array.length - i; j++){
                if(array[j] > array[j + 1]){
                    var temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1]= temp;
                }
            }
        }
        return array;
    },

    /**
     * @method bubSortIntegerFile() - To perform bubble search on integer.
     */
    bubSortIntegerFile(){
        var data = fs.readFileSync(__dirname+'/TextFiles/IntegerFile.txt', 'utf-8'); 
        var array = data.split(", ");
        var numArray = [];

        /**
         * @description To Convert String format to number format data of file
         */
        for(let i in array) {
            numArray.push(parseInt(array[i]));
        }

        var sortedArr = this.bubleSortInteger(numArray);
        return sortedArr;
    },

    /**
     * @method isRightDate() - To ensure input date is valid date.
     */
    isRightDate(dateInput, totalDays){
        try{
            /**
             * @description To handle exception and if found then trow specific custom error.
             */
            if(dateInput == undefined || dateInput == null || dateInput.length == 0)  throw "input should not be undefined or null"
            if(isNaN(dateInput))                                                      throw "input should be number"     
            
        }
        catch(e){
            return e;
        } 
        
        while(dateInput < 1 || dateInput > totalDays){
            console.log(`Enter Proper Date (Range: 1 - ${totalDays})`);
            var dateInput = this.integerInput();
        }
        return dateInput;
    },

    /**
     * @method isRightMonth() - To ensure input month is valid month.
     */
    isRightMonth(monthInput){

        try{
            /**
             * @description To handle exception and if found then trow specific custom error.
             */
            if(monthInput == undefined || monthInput == null || monthInput.length == 0)          throw "input should not be undefined or null"
            if(isNaN(monthInput))                                                      throw "input should be number"     
            
        }
        catch(e){
            return e;
        }

        while(monthInput < 1 || monthInput > 12){
            console.log("Enter Proper Month (Range: 1 - 12)");
            var monthInput =  this.integerInput();
        }
        return monthInput;
    },

    /**
     * @method isRighYear() - To ensure input year is valid year.
     */
    isRighYear(yearInput){

        try{
            /**
             * @description To handle exception and if found then trow specific custom error.
             */
            if(yearInput == undefined || yearInput == null || yearInput.length == 0)          throw "input should not be undefined or null"
            if(isNaN(yearInput))                                                      throw "input should be number"     
            
        }
        catch(e){
            return e;
        }

        while(yearInput < 1582 || yearInput > 9999){
            console.log("Enter Proper Year (Range: 1582 - 9999)");
            var yearInput =  this.integerInput();
        }
        return yearInput;
    },

    /**
     * @method dayOfWeek() - To find day of week.
     */
    dayOfWeek(d, m, y){

        try{
            /**
             * @description To handle exception and if found then trow specific custom error.
             */
            if(d == undefined || d == null || d.length == 0 || m == undefined || m == null || m.length == 0 || y == undefined || y == null || y.length == 0)          
                                        throw "input should not be undefined or null"
            if(isNaN(d) || isNaN(m) || isNaN(y))              
                                        throw "input should be number"  
        }
        catch(e){
            return e;
        }
    
        var y0 = y - Math.floor((14 - m) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        var m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
        var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;

        return d0;
    },

    /**
     * @method insertionSortInteger() - To perform insertion sort on integer.
     */
    insertionSortInteger(array){
        try{
            
            for(let i = 0; i < array.length; i++){
                if(array[i] == undefined || array[i] == null)              
                                        throw "input should not be undefined or null"
                if(isNaN(array[i]))      throw "input should be number"
                
            }
        }
        catch(e){
            return e;
        }

        /**
         * @description Sorting Computation
         */
        for(let i = 0; i < array.length; i++){
            for(let j = i; j > 0; j--){
                if(array[j] < array[j - 1]){
                    var temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1]= temp;
                }else 
                    break;
            }
        }
        return array;
    },

    /**
     * @method insertionSortString() - To perform insertion sort on string.
     */
    insertionSortString(array){
        try{
            for(let i = 0; i < array.length; i++){
                if(array[i] == undefined || array[i] == null)              
                                        throw "input should not be undefined or null"
                if(!isNaN(array[i]))     throw "input should be string"
            }
        }
        catch(e){
            return e;
        }

        /**
         * @description Sorting Computation
         */
        for(let i = 0; i < array.length; i++){
            for(let j = i; j > 0; j--){
                if(array[j] < array[j - 1]){
                    var temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1]= temp;
                }else 
                    break;
            }
        }
        return array;
    },

    /**
     * @method InsSortIntegerFile() - To perform insertion sort on integer from file.
     */
    InsSortIntegerFile(){
        var data = fs.readFileSync(__dirname+'/TextFiles/IntegerFile.txt', 'utf-8');
        var array = data.split(", ");
        var numArray = [];

        /**
         * @description To Convert String format to number format data of file
         */
        for(let i in array) {
            numArray.push(parseInt(array[i]));
        }

        var SortedArr = this.insertionSortInteger(numArray);
        return SortedArr;
    },

    /**
     * @method mergeSortString() - To perform merge sort on string.
     */
    mergeSortString(arr){
        
        try{
            for(let i = 0; i < arr.length; i++){
                if(arr[i] == undefined || arr[i] == null)              
                                        throw "input should not be undefined or null"
                if(!isNaN(arr[i]))       throw "input should be string"
            }
        }
        catch(e){
            return e;
        }
    
        if(arr.length < 2) return arr;
        
            var mid = parseInt(arr.length / 2);
            var left = arr.slice(0, mid);
            var right = arr.slice(mid, arr.length);
            
            left = this.mergeSortString(left);
            right = this.mergeSortString(right);
        
            var sortedMArr = [];
            let li = 0;
            let ri = 0;

            while(li < left.length && ri < right.length){
                if(left[li] < right[ri]){
                    sortedMArr.push(left[li]);
                    li++;
                    
                }else{
                    sortedMArr.push(right[ri]);
                    ri++;
                }
            }
            while(li < left.length){
                sortedMArr.push(left[li]);
                li++;
            }
            while(ri < right.length){
                sortedMArr.push(right[ri]);
                ri++;
            }
        
            return sortedMArr; 
        
        
    },

    /**
     * @method primeRange() - To find prime number of given range and store in an array.
     */
    primeRange(range){
        var primeArray = [];
        console.log(`Prime number 0f Range 0 to ${range}`)
        
        for(let i = 0; i < range; i++){
        var primePass = this.isPrime(i);

        /**
         * @description [index 1 = true & index 1 = num (Used index 0 as we need only boolean Value)]
         */
        if(primePass[0]){
            //
                primeArray.push(primePass[1])
                console.log(i); 
        }
        }

        var paliArray = this.isPalindrome(primeArray);
        return paliArray;
    },

    /**
     * @method vendingMachineCal() - To change of input money for vending machine.
     */
    vendingMachineCal(noteArr, money){
        try{
            /**
             * @description To handle exception and if found then trow specific custom error.
             */
            if(money == undefined || money == null || money.length == 0)          throw "input should not be undefined or null"
            if(isNaN(money))                                                      throw "input should be number"     
            
            var i = 0, notes = 0; 
    
            while(money > 0){
                var numOfNotes = 0;
                notes =Math.floor(money / noteArr[i]);
                remMoney = money % noteArr[i];
                
                numOfNotes = numOfNotes + notes;
                money = remMoney;
                
                if(numOfNotes != 0) {
                    console.log("Total notes of '"+noteArr[i]+"' are \n"+numOfNotes);
                }
                i++;
            }
        }
        catch(e){
            return e;
        }
    },

}
