var algoUtil = require('../Utility/AlgorithmUtility');

var board = [
    ['', '', '',],
    ['', '', '',],
    ['', '', '',]
];

module.exports = {

    userPlay() { 
        console.log('\n 1  |  2  |  3  \n----|-----|---- \n 4  |  5  |  6  \n----|-----|---- \n 7  |  8  |  9');

        console.log("\nEnter your choice (1 - 9)");
        var userPosition = parseInt(algoUtil.integerInput());

        while(userPosition <= 0 || userPosition >= 10) {
            console.log("\nInvalid Input (Range 1 - 9) \nEnter Again");
            userPosition = parseInt(algoUtil.integerInput());
        }
        this.insertInBoard(userPosition, 'O');
    },

    computerPlay() {
        var comPosition = Math.floor((Math.random() * 9) + 1);
        this.insertInBoard(comPosition, 'X');
    },

    insertInBoard(position, sign) {
        
        switch(position) {
            case 1:
                if(board[0][0] == '') {
                    board[0][0] = sign;
                    this.printBoard();
                }
                else {
                    this.isPlaceOccupied(position, sign);
                }
                break;
        
            case 2:
                if(board[0][1] == '') {
                    board[0][1] = sign;
                    this.printBoard();
                }
                else {
                    this.isPlaceOccupied(position, sign);
                }
                break;
        
            case 3:
                if(board[0][2] == '') {
                    board[0][2] = sign;
                    this.printBoard();
                    }
                else {
                    this.isPlaceOccupied(position, sign);
                }
                break;
        
            case 4:
                if(board[1][0] == '') {
                    board[1][0] = sign;
                    this.printBoard();
                }
                else {
                    this.isPlaceOccupied(position, sign);
                }
                break;
        
            case 5:
                if(board[1][1] == '') {
                    board[1][1] = sign;
                    this.printBoard();
                }
                else {
                    this.isPlaceOccupied(position, sign);
                }
                break;
        
            case 6:
                if(board[1][2] == '') {
                    board[1][2] = sign;
                    this.printBoard();
                }
                else {
                    this.isPlaceOccupied(position, sign);
                }
                break;
        
            case 7:
                if(board[2][0] == '') {
                    board[2][0] = sign;
                    this.printBoard();
                }
                else {
                    this.isPlaceOccupied(position, sign);
                }
                break;
        
            case 8:
                if(board[2][1] == '') {
                    board[2][1] = sign;
                    this.printBoard();
                }
                else {
                    this.isPlaceOccupied(position, sign);
                }
                break;
        
            case 9:
                if(board[2][2] == '') {
                    board[2][2] = sign;
                    this.printBoard();
                }
                else {
                    this.isPlaceOccupied(position, sign);
                }
                break;
                    
            default:
                console.log("Invalid Choice (Range 1 - 9)");
                this.userPlay();
                break;
                        
        }

        //Check Winning Conditions
        var result = this.checkWinner();
        if(result == 'X') {
            console.log("\nComputer WON");
            process.exit();
        } 
            else if(result == 'O') {
            console.log("\nYou WON");
            process.exit();
            } 
                else if(result == 'Tie') {
                console.log("\nMatch is Tie");
                process.exit();
                }

        //To change player for next move
        if(sign == 'O') {
            console.log("\n*** COMPUTER Played ***");
            this.computerPlay();
        }
        else {
            console.log("\n*** YOUR'S Turn ***");
            this.userPlay();
        }                               
    },

    // To call same Player if place is Occupied
    isPlaceOccupied(placeNumber, sign) {
        
        if(sign == 'O') {
            console.log(`Place ${placeNumber} is Already Occupied (Try Another)`);
            this.userPlay();
        }
        else {
            this.computerPlay();
        }
    },

    equalMatch(a, b, c) {
        return a != '' && a === b && b === c;
    },

    checkWinner() {
        let winner = null;

        // Horizontal Conditions
        for(let i = 0; i < 3; i++) {
            if(this.equalMatch(board[i][0], board[i][1], board[i][2])) {
                winner = board[i][0];
            }
        }

        // Vertical Conditions
        for(let i = 0; i < 3; i++) {
            if(this.equalMatch(board[0][i], board[1][i], board[2][i])) {
                winner = board[0][i];
            }
        }

        // Diagonal Conditions
        if(this.equalMatch(board[0][0], board[1][1], board[2][2])) {
            winner = board[0][0];
        }
        if(this.equalMatch(board[0][2], board[1][1], board[2][0])) {
            winner = board[0][2];
        }

        //Check for any Blank Spots
        let blankSpot = 0;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(board[i][j] == '') {
                    blankSpot++;
                }
            }
        }

        //To Decide whether Tie or Win
        if(blankSpot == 0 && winner == null) {
            return 'Tie';
        }
        else {
           
            return winner;
        }
    },

    printBoard(){
        console.log(`\n  ${board[0][0]}    ${board[0][1]}     ${board[0][2]}  \n----|-----|---- \n  ${board[1][0]}    ${board[1][1]}     ${board[1][2]}  \n----|-----|---- \n  ${board[2][0]}    ${board[2][1]}     ${board[2][2]}`);
    }

};