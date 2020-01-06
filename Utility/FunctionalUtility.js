var read = require('readline-sync');


module.exports = {

/*-------------------------- Addition ----------------------*/
add(a, b){

    var ans = a + b;
    console.log("Addition = "+ans);
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

/*----------------------- Harmonic Number --------------------*/
harmonic: function mySelf (nthNumber) {
    
    var sum = 0;
    if(nthNumber > 0){
        for(let i = 1; i <= nthNumber; i++){
            sum = sum + (1/i);
        }
        console.log("\nHarmonic Value for "+nthNumber+" = \n"+sum);
        
    }
    else{
        var nthNumber = parseInt(read.question("Enter POSITIVE nth number Again"));
        mySelf(nthNumber);
    }
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
    console.log("Number of Wins    = "+win);
    console.log("Percentage of win = "+(win/trials)*100);
    console.log("Percentage of win = "+((trials - win)/trials)*100);
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
    for(let i = 0; i < length; i++){
        array[i]= read.question();
    }
    //Computation and Print
    for(let i = 0; i < length; i++){
        for(let j = i+1; j < length; j++){
            for(let k = j+1; k < length; k++){
                if(array[i]+array[j]+array[k]==0){
                    console.log(array[i]+" "+array[j]+" "+array[k])
                }
            }
        }
    }
}
}