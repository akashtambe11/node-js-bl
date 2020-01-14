//Function first with callBack function
function first(arg, callback) {
    console.log("I am from '"+arg+"' function");
    callback();
}
//Second function (will be exicuted after first one)
function second() {
    console.log("I am callback function");
}

//function call
first('normal', second);