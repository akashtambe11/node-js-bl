

function addition(value, callback) {
    return callback(value + 3, false)
}

function subtraction(value, callback) {
    return callback(value - 5, false)
}

function multiplication(value, callback) {
    return callback(value * 7, false)
}


addition(5, function(addResult, err){
    if(!err){
        subtraction(addResult, function(SubResult, err){
            if(!err){
                multiplication(SubResult, function(multResult, err){
                    if(!err){
                        console.log("\nFinal Result: "+multResult);
                        
                    }
                });
            }
        });
    }
});




