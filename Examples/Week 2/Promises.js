function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;

            if (error) {
                console.log("\nPromise Resolved");
                resolve();
            }
            else {
                console.log("\nPromise Rejected");
                reject();
            }
        }, 2000)
    })

}

/**
 * @description if function resolve then run first else catch
 *              the reject function.
 */
func1().then(() => {
    console.log("Thanks for Resolving");
    
}).catch(() => {
    console.log("Try next Time");
    
})