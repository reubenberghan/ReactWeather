'use strict';

// function getTemp (location, callback) {
//     callback(undefined, 24);
//     callback('city not found...');
// }

// getTemp('Sydney', function getTempCallback(err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(24);
//             reject('city not found...');
//         }, 1000);
//     });
// }

// getTempPromise('Sydney')
//     .then(function fulfillment (temp) {
//         console.log('promise success', temp);
//     }, function reject (err) {
//         console.log('promise error', err);
//     });

function addPromise (a,b) {
    return new Promise(function (resolve, reject) {
        if (typeof a == 'number' && typeof b == 'number') {
            resolve(a + b);
        }
        reject('invalid input, one or both were not numbers');
    });
}

addPromise(1,2)
    .then(function (sum) {
        console.log('success', sum);
    }, function (err) {
        console.log('error', err);
    });

addPromise(1,'a')
    .then(function (sum) {
        console.log('success', sum);
    }, function (err) {
        console.log('error', err);
    });
