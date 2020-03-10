var util = require('../Utility/DSutility');
var algoUtil = require('../Utility/AlgorithmUtility')

prime2D = () => {

    console.log("Enter the Range 0 - ? ");
    var getPrimeRange = algoUtil.integerInput();

    var primeArr = util.primeRange(getPrimeRange);
    // console.log(primeArr);

    var finalArray = [[]];
    var i = 0; j = 0; size = 100;

    for(let k = 0; k < primeArr.length; k++){

        if(primeArr[k] <= size){
            finalArray[i][j] = primeArr[k];
            j++;
        }
        //If Range exceeds than 100
        else{
            i = i + 1;
            j = 0;
            size = size + 100;

            finalArray[i] = [];
            finalArray[i][j] = primeArr[k];

        }
    }
    //0-100, 100-200, ....., 900-1000 == 10 Parts
    // for(let m = 0; m < i+1; m++){
    //     console.log(finalArray[m]);  
    // }
    console.log(finalArray);  
}
prime2D();

