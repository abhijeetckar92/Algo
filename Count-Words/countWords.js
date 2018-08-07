"use strict";

class Map {
    constructor(args) {
        this.collection = {};
        this.words = 0;
        //this.countWords(args);
    }

    input(args) {
        var stringInput = process.stdin.read();
        constructor(stringInput);
    }

    countWords(stringInput) {
        let arrayString = stringInput.split(" ");
        for (let i = 0; i < arrayString.length; i++) {
            this.set(arrayString[i]);
        }
    }

    has(key) {
        return (key in this.collection);
    }

    set(key) {
        let keyExists = this.has(key);
        if (keyExists) {
            this.collection[key] += 1;
            return;
        }
        let value = 1;
        this.collection[key] = value;
        this.words++;
    }

    // print(){
    //     for(let i = 0 ; i < this.words ; i++){
    //         console.log(key in this.collection);
    //     }
    // }
}

//var stringInput = "the quick brown fox the";

var map = new Map();

map.countWords("the quick brown fox the");

//map.input("the quick brown fox the");
//map.countWords();

//map.print();

console.log(map);