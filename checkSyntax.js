var Stack = require('../DS/Stack/stack');

var s = new Stack();

class SyntaxChecker {
    constructor(args) {
        this.stackObject = new Stack();
        //console.log(this.stackObject);
        this.createStack(args);
    }

    createStack(args) {
        this.stackObject = args.split("");
        //console.log(this.stackObject);
    }

    check() {
        var isCorrect = this.checkSyntax();
        if (isCorrect) {
            console.log("Syntax is correct");
            return;
        }
        console.log("syntax isn't correct");
    }

    checkSyntax() {
        let array = new Array();
        let j = 0;
        for (let i = this.stackObject.length - 1; i >= 0; i--) {
            if (this.stackObject[i] != array[j]) {
                if (array[0] != undefined) {
                    j++;
                }
                let poppedItem = this.stackObject.pop();
                array.push(poppedItem);
            }
            else {
                this.stackObject.pop();
                array.pop();
                j--;
                i--;
            }
        }
        if (array.length == 0) {
            return false;
        } return true;
    }
}

// var input = "[{()}]";
// var output = input.split("");
// //s.print();
// console.log(output);

var c = new SyntaxChecker("[{(({[");

c.check();