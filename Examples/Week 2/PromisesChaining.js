// new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(1), 2000);

// }).then((result) => {
//     console.log(result);
//     return result + 2;

// }).then((result) => {
//     console.log(result);
//     return result + 2;

// }).then((result) => {
//     console.log(result);
//     return result + 2;
// });



function doubleValue(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }
  
  function addPromise(x){
    return new Promise(resolve => {
      doubleValue(10).then((a) => {
        doubleValue(20).then((b) => {
            doubleValue(30).then((c) => {
            resolve(x + a + b + c);
            })
        })
      })
    });
  }
  
  addPromise(10).then((sum) => {
    console.log(sum);
  });