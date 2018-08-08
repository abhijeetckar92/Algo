//export 
"use strict";
function bubbleSort(arr) {
    
    if (arr.length <= 1) {
        return arr;
    }
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

module.exports = { bubbleSort: bubbleSort };
