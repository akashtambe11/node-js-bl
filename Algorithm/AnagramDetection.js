var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

AnagramMain = () => {
    console.log("Enter String 1 =")
    var str1 = util.stringInput();
    console.log("\nEnter String 2 =")
    var str2 = util.stringInput();
    
    var ansCheck = util.isAnagram(str1, str2);
    if(ansCheck == true){
        console.log("\nEnterd two Strings are Anagram");
    }else{
        console.log("\nTwo Strings are NOT Anagram");
    }
}
AnagramMain();