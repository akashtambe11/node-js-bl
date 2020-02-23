

//ES6 Features


// ***********************************************************************
console.log("\n------------------> ES6 Features: Arrow Function\n");

ArrowFunction = (a, b) => {

    console.log("Addition = "+(a+b));
    
}

ArrowFunction(10, 20);


// ***********************************************************************
console.log("\n\n\n------------------> ES6 Features: Class \n");

class car {

    constructor(model){
        this.carName = model;
    }

    show(){
        return this.carName + ":- Milage 15 kmpl";
    }
}

var ford = new car("Mustang");

console.log(ford.show());


// ***********************************************************************
console.log("\n\n\n------------------> ES6 Features: var and let \n");

var x = 20;
    {
        let x = 222;
        console.log("let x value (Internal) = "+x);
        
    }
    console.log("var x value (External) = "+x);


// ***********************************************************************
console.log("\n\n\n------------------> ES6 Features: ForEach \n");

var array = [11,12,13,14,15,16,17,18,19,20];

console.log("Array Elements are:");

array.forEach(function(elements){
    console.log(elements);
    }
)


// ***********************************************************************
console.log("\n\n\n------------------> ES6 Features: Rest Parameters \n");

function display(...args){ 
    
    console.log("Rest parameters are:\n"+args);
    
}

display(111,222,333,444,555);


// ***********************************************************************
console.log("\n\n\n------------------> ES6 Features: Spread Operator \n");

const arrray1 = [1,2];
const arrray2 = [3];
const arrray3 = [4,5,6];

//insted of concat we will used spread operator

console.log(...arrray1, ...arrray2, ...arrray3);
