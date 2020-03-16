var async = require('async');

// console.log('Program Start');

// async.waterfall([
//     function (callback) {
//         console.log('\nFirst Step --> ');
//         callback(null, '1', '2');
//     },
//     function (arg1, arg2, callback) {
//         console.log('\nSecond Step --> ' + arg1 + ' ' + arg2);
//         callback(null, '3');
//     },
//     function (arg1, callback) {
//         console.log('\nThird Step --> ' + arg1);
//         callback(null, 'final result');
//     }
// ], function (err, result) {
//     if (err) {
//         console.log(err);

//     } else {
//         console.log('\nMain Callback --> ' + result);
//     }

// });

// console.log('Program End');


/**
 * @description Done is callback function (water fall method two parameters
 *              1. Array & 2. Function)
 */

console.log('Program Start');

async.waterfall([
    function (done) {
        done(null, 'Value 1');
    },

    function (value1, done) {
        console.log(value1);
        done(null, 'Value 2');
    },

    function (value2, done) {
        console.log(value2);
        done(null, 'done');
    }

], function (err) {
    if (err)
        throw new Error(err);
});

console.log('Program End');