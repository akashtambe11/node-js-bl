//ES6

class State {
    constructor(name) {
        this.stateName = name;
    }
}

//Create object of state
var myState = new State("Maharashtra");

console.log("\nMy State = "+myState.stateName);
