var car = ['bmw', 'audi', 'mercedes', 'toyota', 'hyundai', 'honda'];
var animal = ['cat', 'dog', 'lion'];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//pop
car.pop();
console.log("\nPush    = " + car);

//push
car.push('suzuki');
console.log("\nPop     = " + car);

//Splice
car.splice(0, 1)
console.log("\nSplice  = " + car);

//Replace
car.splice(1, 1, 'lamborghini');
console.log("\nReplace = " + car);

//Merge
var mergeArray = car.concat(animal);
console.log("\nMerge   = " + mergeArray);

//Sort
car.sort()
console.log("\nSort    = " + car);

//Map
var numberSqr = number.map(square);
console.log("\nSquare   = " + numberSqr);


function square(value) {
    return (value * 2);
}

