"use strict";

class Map {
    constructor(args) {
        this.collection = {};
        this.words = 0;
        //this.countWords(args);
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

    print() {
        for (let key in this.collection) {
            console.log("'"+key+"'"+ " " +"'"+this.collection[key]+"'");
        }
    }
}

var map = new Map();
map.countWords("the quick brown fox the");
map.print();
