'use strict'
let x = ['5', '0', 9, 3, 2, 1, '9', 6, 7];

function sumMix(x){
    return x.reduce((sum,current) => sum + current, 0);
}
console.log(sumMix(x));