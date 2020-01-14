var read = require('readline-sync');
   

    try{

        //Input
        var num1 = read.question("Enter number 1 = \n");
        var num2 = read.question("Enter number 2 = \n");
        
        //Validation
        if(num1.length == 0 || num2.length == 0)       throw "Null input are not allowed"
        if(num1 == 'undefined' || num2 == 'undefined') throw "Undefined values are not allowed"
        if(isNaN(num1) || isNaN(num2))                 throw "String input is not allowed"
        if(num1 == 0 || num2 == 0)                     throw "Zero input is not allowed"
        
        //Computation
        var addition = num1 + num2;
        console.log("Addition of two number = "+addition)
    
    }
    catch(e){
        console.log("Error : "+e);
        
        
    }

       


