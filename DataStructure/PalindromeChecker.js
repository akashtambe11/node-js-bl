
var util = require('../Utility/DSutility');
var algoUtil = require('../Utility/AlgorithmUtility');

palindromeChecker = () => {

    console.log("Enter String to check Palindrome");
    
    var str = algoUtil.stringInput();
    var n = str.length;

    var result = util.palindromeChecker(str, n);

    if(result == true){
        console.log("\nEntered String is Palindrome");
    }
    else{
        console.log("\nEntered string is NOT Palindrome");
    }
        
}
palindromeChecker();