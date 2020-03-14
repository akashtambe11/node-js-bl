/********************************************************************************************
*Execution    :  default node     cmd> node TicTacToe.js
*
*Purpose      :  To play TicTacToe game.
*@description  
*
*@file        :  TicTacToe.js
*@overview    :  primeRange module to print prime range.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/TicTacToeUtility');
var algoUtil = require('../Utility/AlgorithmUtility');

/**
 * @description The main function is written to play TicTacToe Game.
 */
tictTacToeMain = () => {

    console.log('\n 1  |  2  |  3  \n----|-----|---- \n 4  |  5  |  6  \n----|-----|---- \n 7  |  8  |  9');


    console.log('\nWho will Play First \nPress \n1 for User (You) = O \n2 for Computer   = X\n');
    let firstPlayer = parseInt(algoUtil.integerInput());
    
    /**
     * @description To ensure user can only enter 0 or 1.
     */
    while(firstPlayer <= 0 || firstPlayer >= 3) {
        console.log("\nInvalid Input (Range 1 - 2) \nEnter Again");
        firstPlayer = parseInt(algoUtil.integerInput());
    }

    /**
     * @description if condtion applied to check who will goint to play first.
     */
    if(firstPlayer == 1) {
     
        console.log(`\n*** YOUR TURN TO PLAY ***`);
         /**
        * @description Calling userPlay method from TicTacToeUtility File.
        */
        util.userPlay();
    }
    else {
       
        console.log("\n*** COMPUTER Played ***");
         /**
        * @description Calling computerPlay method from TicTacToeUtility File.
        */
        util.computerPlay();
    }
}

tictTacToeMain();
