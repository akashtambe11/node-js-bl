var read = require('readline-sync');
var fs = require('fs');
//var BinStrFile = require('../Json/BinSearchFile.json');

module.exports = {
//Integer Input
integerInput(){
        var value = read.question("");
        return value;
    },
add(num1, num2){
    
    if((typeof(num1) && typeof(num2)) === typeof("a")){
        return false
    }else{
         
    var ans = num1 + num2;
    return ans;
    }    
},









/*===================== GLOBAL METHODS ====================*/
//Array Integer Input
arrayIntElementInput(size){
    console.log("\nEnter "+size+" Elements of Array");
    var array = [];
    for(let i = 0; i < size; i++){
        array[i] = parseInt(read.question());
    }
    return array.sort();
},

//Array String Input
arrayStrElementInput(size){
    console.log("\nEnter "+size+" Elements of Array");
    var array = [];
    for(let i = 0; i < size; i++){
        array[i] = read.question();
    }
    return array.sort();
},
//Prime Number Checker
isPrime(num){
   
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
    console.log("\nPrime number which are also PALINDROM")
    for(let i = 0; i < num.length; i++){
    var temp = num[i];
    var rem, revNumber = 0;
        while(num[i] > 0){
            rem =num[i] % 10;
            revNumber = revNumber * 10 + rem;
            num[i] = parseInt(num[i] / 10);
        }
        if (revNumber == temp){
            console.log(temp);
        }
    } 
},

/*======================== PROGRAMMS ======================*/
/*---------------(--------- Anagram -----------------------*/
isAnagram(str1, str2){
   
    //To removing all spaces
    var str1trim = str1.replace(/\s/g,'');
    var str2trim = str2.replace(/\s/g,'');
     
    if(str1trim.length == str2trim.length){
        var str1Sort = str1trim.toLowerCase().split('').sort().join('');
        var str2Sort = str2trim.toLowerCase().split('').sort().join('');
            if(str1Sort == str2Sort){
                console.log("Strings '"+str1+"' & '"+str2+"' are Anagram.")
            }else{
                console.log("Strings '"+str1+"' & '"+str2+"' are NOT Anagram.")
            }
        }else{
            console.log("Strings "+str1+" & "+str2+" are NOT Anagram.")
    }

},
/*--------------- Prime Number (1 - 1000)-----------------*/
primeRange(){
    var primeArray = [];
    console.log("Prime number 0f Range 0 to 1000")
    for(let i = 0; i <= 1000; i++){
       var primePass = this.isPrime(i);
       if(primePass[0]){
        //
            primeArray.push(primePass[1])
            console.log(i);
       }
    }
    //It will Call isPrimePalindrome method(Whole Array is Passed)
    this.isPalindrome(primeArray);
},
/*------------------ Binary Search Integer----------------*/
binarySearchInteger(array, key){
    
    var low = 0;
    var high = array.length - 1;
    var mid = parseInt((low + high)/2);
    
    while(low <= high){
        if(key == array[mid]){
            console.log("Your Key '"+key+"' is FOUND in an Array.");
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
        console.log("Your Key '"+key+"' does NOT found in Search.")
    }
},
/*------------------ Binary Search String----------------*/
binarySearchString(array, key){

    var low = 0;
    var high = array.length - 1;
    var mid = parseInt((low + high)/2);
    
    while(low <= high){
        if(key == array[mid]){
            console.log("Your Key '"+key+"' is FOUND in an Array.");
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
        console.log("Your Key '"+key+"' does NOT found in Search.")
    }
},
/*----------------- Insertion Sort Integer----------------*/
insertionSortInteger(array){
    
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
    console.log("\nSorted Integer Array = \n"+array);
},

/*----------------- Insertion Sort String-----------------*/
insertionSortString(array){
  
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
    console.log("\nSorted Integer Array = \n"+array);
},
/*------------------ Bubble Sort Integer------------------*/
bubleSortInteger(array){

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
    console.log("\nSorted Integer Array = \n"+array);
},
/*------------------ Bubble Sort String------------------*/
bubleSortString(array){
   
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
    console.log("\nSorted String Array = \n"+array);
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
/*-----------------------Day of Week --------------------*/
isRightDate(dateInput){
    while(dateInput < 1 || dateInput > 31){
        var dateInput = read.question("Enter Proper Date (Range: 1 - 31)\n");
    }
    return dateInput;
},
isRightMonth(monthInput){
    while(monthInput < 1 || monthInput > 12){
        var monthInput = read.question("Enter Proper Month (Range: 1 - 12)\n");
    }
    return monthInput;
},
isRighYear(yearInput){
    while(yearInput < 1582 || yearInput > 9999){
        var yearInput = read.question("Enter Proper Year (Range: 1582 - 9999)\n");
    }
    return yearInput;
},
dayOfWeek(d, m, y){
    y0 = y - (14 - m) / 12;
    x = y0 + y0 / 4 - y0 / 100 + y0 / 400;
    m0 = m + 12 * ((14 - m) / 12) - 2;
    d0 = (d + x + 31 * m0 / 12) % 7;
    //console.log(d0);
    console.log(typeof(d0));
    return Math.floor(d0);
},
/*------------- Binary Search String File -------------*/
binSearchStringFile(name){
    var data = fs.readFileSync(__dirname+'/TextFiles/BinSearchStringFile.txt', 'utf-8'); 
    var array = data.split(", ").sort();
 
    this.binarySearchString(array, name);
    
},

/*-------------- Bubble Sort Integer File --------------*/
bubSortIntegerFile(){
    var data = fs.readFileSync(__dirname+'/TextFiles/IntegerFile.txt', 'utf-8'); 
    var array = data.split(", ");

    this.bubleSortInteger(array);
},

/*------------ Insertion Sort Integer File -------------*/
InsSortIntegerFile(){
    var data = fs.readFileSync(__dirname+'/TextFiles/IntegerFile.txt', 'utf-8');
    var array = data.split(", ");

    this.insertionSortInteger(array);
},

/*----------------- Binary Conversion -----------------*/
toBinary(num){
    var rem = 0, binary = 0, i = 1;
    while(num > 0){
        rem = parseInt(num % 2);
        binary = parseInt(binary + rem * i);
        num = parseInt(num / 2);
        i = i * 10;  
    }
    return binary;
},
}
