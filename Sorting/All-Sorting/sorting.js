'use strict';
var bubbleSort = require('../Bubble-Sort/bubbleSort').bubbleSort;
var mergeSort = require('../Merge-Sort/mergeSort').mergeSort;
var selectionSort = require('../Selection-Sort/selectionSort').selectionSort;
var quickSort = require('../Quick-Sort/quickSort').quickSort;


var m = {
    "bubble": bubbleSort,
    "selection": selectionSort,
    "merge": mergeSort,
    "quick" : quickSort

};

function isEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length ; i++) {
        if(arr1[i]!=arr2[i]){
            return false;
        }
    }
    return true;    
}

function sort(funcName, array) {
    console.log(m[funcName]);
    return m[funcName](array);
}

// var arr = new Array();

// var result = sort("bubble",arr);

// console.log(result==arr);

module.exports = { sort: sort,
                    isEqual:isEqual };