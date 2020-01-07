var read = require('readline-sync');

module.exports = {
/*----------------------- Bubble Sort --------------------*/
bubleSortArray(size){
    console.log("\nEnter "+size+" Elements of Array");
    var array = [];
    for(let i = 0; i < size; i++){
        array[i] = read.question();
    }
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
    console.log("Sorted Array = \n"+array);
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
}