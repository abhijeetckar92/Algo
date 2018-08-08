"use strict";

function selectionSort(array) {
    if (array.length <= 1) {
        return array;
    }
    for (let i = 0; i < array.length; i++) {
        var minIndex = findMinIndex(array, i);
        swap(array, minIndex, i);
    }
    return array;
}

function findMinIndex(array, iterator) {
    // minIndex
    for (let j = iterator + 1; j < array.length; j++) {
        if (array[iterator] > array[j]) {
            iterator = j;
        }
    }
    return iterator;
}

function swap(array, minIndex, i) {
    let minValue = array[minIndex];
    array[minIndex] = array[i];
    array[i] = minValue;
}

module.exports = { selectionSort: selectionSort };
