/**
 * @description Async functions return a Promise. If the function throws an error, the Promise will be rejected. If the function returns a value, 
 *              the Promise will be resolved.
 *              Await:
 *              Async functions can make use of the await expression. This will pause the async function and wait for the Promise to resolve prior 
 *              to moving on.
 */

function doubleValue(x) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000)
    })
}

async function addAsyncvalue(x) {
    const a = await doubleValue(10);
    const b = await doubleValue(20);
    const c = await doubleValue(30);
    return x + a + b + c;
}

addAsyncvalue(10).then(function (sum) {
    console.log(sum);

})

