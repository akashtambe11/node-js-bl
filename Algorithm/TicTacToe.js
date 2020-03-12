var util = require('../Utility/TicTacToeUtility');
var algoUtil = require('../Utility/AlgorithmUtility');

console.log('\n 1  |  2  |  3  \n----|-----|---- \n 4  |  5  |  6  \n----|-----|---- \n 7  |  8  |  9');


console.log('\nWho will Play First \nPress \n1 for User (You) = O \n2 for Computer   = X\n');
let firstPlayer = parseInt(algoUtil.integerInput());

while(firstPlayer <= 0 || firstPlayer >= 3) {
    console.log("\nInvalid Input (Range 1 - 2) \nEnter Again");
    firstPlayer = parseInt(algoUtil.integerInput());
}

if(firstPlayer == 1) {
    //User will play first
    console.log(`\n*** YOUR TURN TO PLAY ***`);
    util.userPlay();
}
else {
    //Computer will play first

    util.computerPlay();
}
