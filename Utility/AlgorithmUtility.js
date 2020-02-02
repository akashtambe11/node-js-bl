var read = require('readline-sync');
var fs = require('fs');
var regex = require('regex');
//var BinStrFile = require('../Json/BinSearchFile.json');

module.exports = {

/*===================== GLOBAL METHODS ====================*/
//Integer Input
integerInput(){
    let num =read.question("").trim();
    while(isNaN(num) || num.length == 0){
             num = read.question("\nInvalid Integer Input (Enter Again) = ").trim();
    }
    return num;       
},

//String Input
stringInput(){
    let str = read.question("").trim();
    while(!(/^[a-zA-Z]+$/.test(str)) || str.length == 0){
        str = read.question("\nInvalid String Input (Enter Again) = ").trim();
    }
    return str;
},

//Array Integer Input
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
            console.log("\nEnter "+size+" Elements");
            var array = [];
            for(let i = 0; i < size; i++){
                array[i] = this.integerInput();   
            }
            return array;
},

//Array String Input
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
    console.log("\nEnter "+size+" Elements");
    var array = [];
    for(let i = 0; i < size; i++){
        array[i] = this.stringInput();   
    }
    return array;
},
//Prime Number Checker
isPrime(num){
    try{
        /**
         * @description To handle exception and if found then trow specific custom error.
         */
        if(num == undefined || num == null || num.length == 0)              throw "input should not be undefined or null"
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
        //[Index 0, Index 1]
        return [true, num];
    }else{
        return false;
    }
   
},
//Palindrome
isPalindrome(num){
    try{
        /**
         * @description To handle exception and if found then trow specific custom error.
         */
        if(num == undefined || num == null || num.length == 0)              throw "input should not be undefined or null"
        if(isNaN(num))                                                        throw "input should be number"     
        
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

/*======================== PROGRAMMS ======================*/
/*---------------(--------- Anagram -----------------------*/
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

/*----------------- Binary Conversion -----------------*/
toBinary(num){
    try{
        /**
         * @description To handle exception and if found then trow specific custom error.
         */
        if(num == undefined || num == null || num.length == 0)              throw "input should not be undefined or null"
        if(isNaN(num))                                                        throw "input should be number"     
        
    }
    catch(e){
        return e;
    }
    var rem = 0, binary = 0, i = 1;
    while(num > 0){
        rem = parseInt(num % 2);
        binary = parseInt(binary + rem * i);
        num = parseInt(num / 2);
        i = i * 10;  
    }
    return binary;
},

/*------------------ Binary Search Integer----------------*/
binarySearchInteger(array, key){
    try{
        /**
         * @description To handle exception and if found then trow specific custom error.
         */
        if(array == undefined || key == undefined || array == null || key == null || array.length == 0 || key.length == 0)    
                            throw "input should not be undefined or null"
        if(isNaN(key))                
                            throw "input should be number"
       
    }
    catch(e){
        return e;
      }
    var low = 0;
    var high = array.length - 1;
    var mid = parseInt((low + high)/2);
    
    while(low <= high){
        if(key == array[mid]){
            return true;
            // console.log("Your Key '"+key+"' is FOUND in an Array.");
            break;
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
        // console.log("Your Key '"+key+"' does NOT found in Search.")
    }
},

/*------------------ Binary Search String----------------*/
binarySearchString(array, key){
    try{
        /**
         * @description To handle exception and if found then trow specific custom error.
         */
        if(array == undefined || key == undefined || array == null || key == null || array.length == 0 || key.length == 0)    
                    throw "input should not be undefined or null"
        if(!isNaN(key))                
                    throw "input key should be string"

       
    }
    catch(e){
        return e;
    }
    var low = 0;
    var high = array.length - 1;
    var mid = parseInt((low + high)/2);
    
    while(low <= high){
        if(key == array[mid]){
            return true;
            // console.log("Your Key '"+key+"' is FOUND in an Array.");
            break;
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
        // console.log("Your Key '"+key+"' does NOT found in Search.")
    }
},

/*------------- Binary Search String File -------------*/
binSearchStringFile(name){
    try{
        
        if(name == "")                 throw "Null values are not allowed"
        if(name == 'undefined')        throw "Undefined values are not allowed"
        if(!isNaN(name))             throw "Number input is not allowed"
    }
    catch(e){
        console.log(e); 
    }
    var data = fs.readFileSync(__dirname+'/TextFiles/BinSearchStringFile.txt', 'utf-8'); 
    var array = data.split(", ").sort();
 
    this.binarySearchString(array, name);
    
},

/*------------------ Bubble Sort Integer------------------*/
bubleSortInteger(array){
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
    //Sorting Computation
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

/*------------------ Bubble Sort String------------------*/
bubleSortString(array){
    try{
        for(let i = 0; i <= array.length; i++){
            if(array[i] == undefined || array[i] == null)              
                                     throw "input should not be undefined or null"
            if(!isNaN(array[i]))     throw "input should be string"
        }
    }
    catch(e){
        return e;
    }
    //Sorting Computation
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

/*-------------- Bubble Sort Integer File --------------*/
bubSortIntegerFile(){
    var data = fs.readFileSync(__dirname+'/TextFiles/IntegerFile.txt', 'utf-8'); 
    var array = data.split(", ");

    var sortedArr = this.bubleSortInteger(array);
    return sortedArr;
},

/*-----------------------Day of Week --------------------*/
isRightDate(dateInput){
    while(dateInput < 1 || dateInput > 31){
        console.log("Enter Proper Date (Range: 1 - 31)");
        var dateInput = this.integerInput();
    }
    return dateInput;
},
isRightMonth(monthInput){
    while(monthInput < 1 || monthInput > 12){
        console.log("Enter Proper Month (Range: 1 - 12)");
        var monthInput =  this.integerInput();
    }
    return monthInput;
},
isRighYear(yearInput){
    while(yearInput < 1582 || yearInput > 9999){
        console.log("Enter Proper Year (Range: 1582 - 9999)");
        var yearInput =  this.integerInput();
    }
    return yearInput;
},
dayOfWeek(d, m, y){
    y0 = y - (14 - m) / 12;
    x = y0 + y0 / 4 - y0 / 100 + y0 / 400;
    m0 = m + 12 * ((14 - m) / 12) - 2;
    d0 = (d + x + 31 * m0 / 12) % 7;
    //console.log(d0);
    //console.log(typeof(d0));
    return Math.floor(d0);
},

/*----------------- Insertion Sort Integer----------------*/
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
    //Sorting Computation
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

/*----------------- Insertion Sort String-----------------*/
insertionSortString(array){
    try{
        for(let i = 0; i <= array.length; i++){
            if(array[i] == undefined || array[i] == null)              
                                     throw "input should not be undefined or null"
            if(!isNaN(array[i]))     throw "input should be string"
        }
    }
    catch(e){
        return e;
    }
    //Sorting Computation
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
/*-------------- Insertion Sort Integer File -------------*/
InsSortIntegerFile(){
    var data = fs.readFileSync(__dirname+'/TextFiles/IntegerFile.txt', 'utf-8');
    var array = data.split(", ");

    var SortedArr = this.insertionSortInteger(array);
    return SortedArr;
},
/*------------------ Merge Sort String--------------------*/
mergeSortString(arr){
   
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

/*--------------- Prime Number (1 - 1000)-----------------*/
primeRange(){
    var primeArray = [];
    console.log("Prime number 0f Range 0 to 1000")
    for(let i = 0; i <= 1000; i++){
       var primePass = this.isPrime(i);
       //[index 1 = true & index 1 = num (Used index 0 as we need only boolean Value)]
       if(primePass[0]){
        //
            primeArray.push(primePass[1])
            console.log(i);
       }
    }
    //It will Call isPrimePalindrome method(Whole Array is Passed)
    var paliArray = this.isPalindrome(primeArray);
    return paliArray;
},

/*-------------------- Vending Machin -------------------*/
vendingMachineCal(noteArr, money){
    var i = 0, notes = 0, numOfNotes = 0;
 
    while(money > 0){
        notes =Math.floor(money / noteArr[i]);
        remMoney = money % noteArr[i];
        
        numOfNotes = numOfNotes + notes;
        money = remMoney;
        
        console.log("Total notes of '"+noteArr[i]+"' are \n"+numOfNotes);
        i++;
    }
},

}
