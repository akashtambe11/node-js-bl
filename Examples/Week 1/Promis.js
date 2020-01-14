let pm = new Promise(function(resolve, reject){
    
    isClean = false;

    if(isClean){
            resolve('Clean');
    }
        else{
            reject('Not Clean');
    }
});

pm.then(function(resolveStatement){ 
    console.log("Room is "+resolveStatement);   
})
pm.catch(function(rejectStatement){
    console.log("Room is "+rejectStatement);   
})