"use strict";

var Stack = require('../../DS/Stack/stack');
var List = require('../../DS/Link-List/list');
var SyntaxChecker = require('./checkSyntax');
var assert = require('assert');

describe('SyntaxChecker',()=>{
    describe('.checkSyntax()',()=>{

        //test 1
        it('1 . checks if the entered syntax is correct or not',()=>{
            let syntax = new SyntaxChecker("([{}])");
            let isCorrect = syntax.checkSyntax();
            assert.equal(isCorrect == true,true);
        });

        //test 2
        it('2 . checks if the entered syntax is correct or not',()=>{
            let syntax = new SyntaxChecker("{([])}");
            let isCorrect = syntax.checkSyntax();
            assert.equal(isCorrect == true,true);
        });

        //test 3
        it('3 . checks if the entered syntax is correct or not',()=>{
            let syntax = new SyntaxChecker("[({})]");
            let isCorrect = syntax.checkSyntax();
            assert.equal(isCorrect == true,true);
        });

        //test 4
        it('4 . checks if the entered syntax is correct or not',()=>{
            let syntax = new SyntaxChecker("({[]})");
            let isCorrect = syntax.checkSyntax();
            assert.equal(isCorrect == true,true);
        });

        //test 5
        it('5 . checks if the entered syntax is correct or not',()=>{
            let syntax = new SyntaxChecker("[{()}]");
            let isCorrect = syntax.checkSyntax();
            assert.equal(isCorrect == true,true);
        });

        //test 6
        it('6 . checks if the entered syntax is correct or not',()=>{
            let syntax = new SyntaxChecker("{[()]}");
            let isCorrect = syntax.checkSyntax();
            assert.equal(isCorrect == true,true);
        });

        //test 7
        it('7 . checks if the entered syntax is correct or not (for wrong syntax)',()=>{
            let syntax = new SyntaxChecker("{{()]}");
            let isCorrect = syntax.checkSyntax();
            assert.equal(isCorrect == false,true);
        });

        //test 8
        it('8 . checks if the entered syntax is correct or not (for wrong syntax)',()=>{
            let syntax = new SyntaxChecker("{{]}}[");
            let isCorrect = syntax.checkSyntax();
            assert.equal(isCorrect == false,true);
        });

        //test 9
        it('9 . checks if the entered syntax is correct or not (for wrong syntax)',()=>{
            let syntax = new SyntaxChecker("{{([[])]}");
            let isCorrect = syntax.checkSyntax();
            assert.equal(isCorrect == false,true);
        });

        //test 10
        it('10 . checks if the entered syntax is correct or not (for wrong syntax)',()=>{
            let syntax = new SyntaxChecker("{[{(()))]}");
            let isCorrect = syntax.checkSyntax();
            assert.equal(isCorrect == false,true);
        });

        //test 11
        it('11 . checks if the entered syntax is correct or not (for wrong syntax)',()=>{
            let syntax = new SyntaxChecker("{{]}}{");
            let isCorrect = syntax.checkSyntax();
            assert.equal(isCorrect == false,true);
        });
        
        //test 12
        it('12 . checks if the entered syntax is correct or not (for wrong syntax)',()=>{
            let syntax = new SyntaxChecker("{({]})(");
            let isCorrect = syntax.checkSyntax();
            assert.equal(isCorrect == false,true);
        });
    });
});