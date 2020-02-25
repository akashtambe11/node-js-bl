var algoUtil = require('../Utility/AlgorithmUtility')
var utilObj = require('util');

module.exports = {

    primeRange(range){
        
        var primeArray = [];
        
        for(let i = 0; i <= range; i++){
            var primePass = algoUtil.isPrime(i);
            //[index 1 = true & index 1 = num (Used index 0 as we need only boolean Value)]
            if(primePass[0]){
                //
                    primeArray.push(primePass[1])
                    // console.log(i); 
            }
        }
        return primeArray;
    },

    
    calender(month, year){
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septmber", "October", "November", "December"];
        var totalDays = [31,28,31,30,31,30,31,30,31,30,31,30];

        if(month == 2 && this.isLeapYear(year)){
            totalDays[month-1] = 29;
        }
        console.log("\n      "+months[month-1]+" "+year+"\n__________________________");;
        console.log("Su  Mo  Tu  We  Th  Fr  Sa ");
        
        var day = algoUtil.dayOfWeek(1, month, year);
        //To print Blank Space before months first Day starts
        for(let i = 0; i < day; i++){
            process.stdout.write("    ");
        }

        //Printing days of Months
        for(let i = 1; i < totalDays[month-1]; i++){
            process.stdout.write(i+"  ");
            
            //1 - 9 numbers have one digit, hence Extra space is needed
            if(i < 10){
                process.stdout.write(" ");
            }
            if(((i + day) % 7 == 0 || (i == totalDays[month-1]))){
                console.log("  ");    
            }
        }
        
    },

    isLeapYear(year){
        // To Check Enter year is leap year or not?
		if (year % 4 == 0 && year % 100 != 0 || year % 400 == 00) {
			return true;
		} else {
			return false;
		}
    }

}
