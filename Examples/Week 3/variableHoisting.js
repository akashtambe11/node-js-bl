//In JavaScript, a variable can be declared after it has been used.

//Hoisting
x = 10;

console.log(x);

//Scope
var x;

if(true) {
    let y = 20;
    var z = 30;
}

console.log('value of x = '+x);
console.log('value of y = '+y);
console.log('value of z = '+z);
