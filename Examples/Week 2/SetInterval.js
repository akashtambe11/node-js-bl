const waitInterval = 1000;
let currentTime = 0;

const waitTime = 12000

console.log("\nCountDown Begins for NEW YEAR\n");

//Interval
const intTime = () => {
    currentTime = currentTime + waitInterval;
    console.log(`\t\t${11 - (currentTime / 1000)}`);
    
}
const stopInterval = setInterval(intTime, waitInterval);


//Timer
const finishTimer = () => {
    clearInterval(stopInterval);
    console.log("\n\tHAPPY NEW YEAR...!!!");
    
}
setTimeout(finishTimer, waitTime);












//ShorLine code

// let currentTime = 0;

// console.log("\nCountDown Begins for NEW YEAR\n");

// const stopInterval = setInterval(function() {
//     currentTime = currentTime + 1000;
//     console.log(`\t\t${11 - (currentTime / 1000)}`);
// }, 1000);

// setTimeout(function() {
//     clearInterval(stopInterval);
//     console.log("\n\tHAPPY NEW YEAR...!!!");
// }, 12000);