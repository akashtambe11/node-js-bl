var algoUtil = require('../Utility/AlgorithmUtility')

module.exports = {

    primeRange(range){
        var primeArray = [];
        console.log(`Prime number 0f Range 0 to ${range}`)
        
        for(let i = 0; i <= range; i++){
            var primePass = algoUtil.isPrime(i);
            //[index 1 = true & index 1 = num (Used index 0 as we need only boolean Value)]
            if(primePass[0]){
                //
                    primeArray.push(primePass[1])
                    console.log(i); 
            }
        }
        return primePass;

    }
}