"use strict";

function fibonacci(data) {
    var a = 0;
    var b = 1;
    var sum = a + b;
    while (sum < data) {
        //console.log(sum);
        a = b;
        b = sum;
    }
    return;
}

fibonacci(10);