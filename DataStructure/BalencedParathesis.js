var util = require('../Utility/DSStackUtility')
var read = require('readline-sync');

balancedParathesisMain = () => {
    var str = read.question("Enter string to check Balanced Parathesis\n");

    var check = util.balencePara(str);
    if (check == true)
        console.log("String parathesis are balenced");
        else
        console.log("String parathesis are NOT balenced");

}

balancedParathesisMain();