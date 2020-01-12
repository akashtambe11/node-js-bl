var read = require('readline-sync');
var algoUtil = require('../Utility/AlgorithmUtility')

module.exports = {

/*========================== PROGRAMMS ========================*/
/*------------------------ Coupon Number ----------------------*/
coupon(size){
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
},
//External Random function to generate Random Number
getRandom(min, max){
   var random = Math.floor(Math.random() * (max - min + 1 )) + min;
   return random;
},

/*-------------------------- Gambler ------------------------*/

gamblerSimulator(stakes, goals, trials){
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
    return [win, (win/trials)*100, ((trials - win)/trials)*100 ]
    // console.log("Number of Wins    = "+win);
    // console.log("Percentage of win = "+(win/trials)*100);
    // console.log("Percentage of win = "+((trials - win)/trials)*100);
},

/*----------------------- Harmonic Number --------------------*/
// harmonic: function mySelf (nthNumber) {
harmonic(nthNumber) {

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
//==============>>>>>>>>>>>>>Check from HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
/*------------------------- Leap Year ------------------------*/

isLeapYear(year){
    console.log("len===="+year);
    
    while(year.length < 4 && year.length > 0) {
        console.log("\nInvalid Input");
        var year = algoUtil.integerInput();
    }
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        return true;
    }
    else{
        return false;
    }
},

/*----------------------- Replace String --------------------*/

replaceString(str, name){
    
    while(name.length < 3){
        console.log("Username should have atleast 3 Character");
        var name = read.question("Enter Username again");
    }
    var newString = str.replace("<<UserName>>", name);
    console.log(newString);
},


/*-------------------------- 2D Array -------------------------*/

twoDimArrray(row, column){
    var array = [];
    for(let i = 0; i < row ; i++){
        array[i]=[];
    }

    //Input
    for(let i = 0; i < row; i++){
        for(let j = 0; j < column; j++){
            array[i][j] = read.question("Enter ["+i+" "+j+"] Element\n");
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

/*-----------------Sum Of Three Integer Zero------------------*/

sumOfThreeIntZero(length){
    var array = [];
    //Input Array
    console.log("Enter "+length+" Elements of Array\n");
    for(var i = 0; i < length; i++){
        array[i]= parseInt(read.question());
    }
    //Computation and Print
    for(var i = 0; i < length; i++){
        for(var j = i+1; j < length; j++){
            for(var k = j+1; k < length; k++){
                if(array[i] + array[j] + array[k] == 0){
                    console.log("Three Elements are = "+array[i]+", "+array[j]+", "+array[k]);
                }
            }
        }
    }
},
/*------------------------- Leap Year ------------------------*/

isLeapYear(year){
    while(year.length < 4){
        console.log("\nInvalid Input");
        var year = read.question("Enter four digit Year\n")
    }
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        console.log(year + " is a Leap Year")
    }
        else{
        console.log(year + " is NOT a Leap Year")
    }
},

}