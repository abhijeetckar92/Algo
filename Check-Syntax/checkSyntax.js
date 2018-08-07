"use strict";

var Stack = require('../../DS/Stack/stack');
var List = require('../../DS/Link-List/list');

//module.exports =
module.exports = class SyntaxChecker {
    constructor(args) {
        this.stack = new Stack(args.split(""));
         //array.split("") is a function of global object array which splits the argument passed to array of arguments.
    }

    //check() returns if the syntax is correct or incorrect.
    check() {
        var isCorrect = this.checkSyntax();
        if (isCorrect) {
            console.log("Syntax is Correct");
            return;
        }
        console.log("Syntax is Incorrect");
    }

    // creates another stack (helperStack) for pushing unmatched arguments
    checkSyntax() {
        let helperStack = new Stack();
        let tempStack = helperStack.stack; //helperStack.stack accesses the list of arguments inside the helperStack object
        let thisStack = this.stack.stack; //this.stack.stack accesses the list of arguments inside the stack object created
        
        
        //strong checks the boundary condition if the tail has '[' or '{' or '('. Syntax is definitely wrong.
        if(tempStack.tail == null && (thisStack.tail.data =='[' || thisStack.tail.data =='{' || thisStack.tail.data =='(')){
            return false;
        }
        
        else{
            for (let i = thisStack.length - 1; i >= 0; i--) {
                if (thisStack.tail.data == '(' && tempStack.tail.data == ')' || thisStack.tail.data == '{' && tempStack.tail.data == '}' || thisStack.tail.data == '[' && tempStack.tail.data == ']') {
                    thisStack.popTail();
                    tempStack.popTail();
                }
                else {
                    tempStack.pushTail(thisStack.tail.data);
                    thisStack.popTail();
                }
            }
            if (tempStack.length != 0) {
                return false;
            }
            return true; 
        }    
    }
}

// var c = new SyntaxChecker("[{()}]");
// var bool = c.checkSyntax();

// console.log(bool)