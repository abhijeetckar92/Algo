"use strict";

var sort = require('./sorting').sort;
var isEqual = require('./sorting').isEqual;

var assert = require('assert');


//----------------------------------------bubbleSort()--------------------------------------------------------//

describe('.sort(funcName , array)',()=>{

    //test 1
    it('1 . sorts the given array with the desired sorting function name when the original array is null',()=>{
        let arr = [];
        let result = sort("bubble",arr);
        let expectedResult = [];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 2
    it('2. sorts the given array with the desired sorting function name when the original array has one element',()=>{
        let arr = [10];
        let result = sort("bubble",arr);
        let expectedResult = [10];
        assert.deepEqual(result, expectedResult,true); 
    });

    //test 3
    it('3 . sorts the given array with the desired sorting function name',()=>{
        let arr = [20,10];
        let result = sort("bubble",arr);
        let expectedResult = [10,20];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 4
    it('4 . sorts the given array with the desired sorting function name',()=>{
        let arr = [30,20,10];
        let result = sort("bubble",arr);
        let expectedResult = [10,20,30];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 5
    it('5 . sorts the given array with the desired sorting function name',()=>{
        let arr = [30,30,20,10];
        let result = sort("bubble",arr);
        let expectedResult = [10,20,30,30];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 6
    it('6 . sorts the given array with the desired sorting function name when the original array has one element',()=>{
        let arr = [40,30,10,20];
        let result = sort("bubble",arr);
        let expectedResult = [10,20,30,40];
        assert.equal(isEqual(result, expectedResult),true); 
    });
});


//----------------------------------------selectionSort()--------------------------------------------------------//

describe('.sort(funcName , array)',()=>{
    
        //test 1
        it('1 . sorts the given array with the desired sorting function name when the original array is null',()=>{
            let arr = [];
            let result = sort("selection",arr);
            let expectedResult = [];
            assert.equal(isEqual(result, expectedResult),true); 
        });
    
        //test 2
        it('2. sorts the given array with the desired sorting function name when the original array has one element',()=>{
            let arr = [10];
            let result = sort("selection",arr);
            let expectedResult = [10];
            assert.equal(isEqual(result, expectedResult),true); 
        });
    
        //test 3
        it('3 . sorts the given array with the desired sorting function name',()=>{
            let arr = [20,10];
            let result = sort("selection",arr);
            let expectedResult = [10,20];
            assert.equal(isEqual(result, expectedResult),true); 
        });
    
        //test 4
        it('4 . sorts the given array with the desired sorting function name',()=>{
            let arr = [30,20,10];
            let result = sort("selection",arr);
            let expectedResult = [10,20,30];
            assert.equal(isEqual(result, expectedResult),true); 
        });
    
        //test 5
        it('5 . sorts the given array with the desired sorting function name',()=>{
            let arr = [30,30,20,10];
            let result = sort("selection",arr);
            let expectedResult = [10,20,30,30];
            assert.equal(isEqual(result, expectedResult),true); 
        });
    
        //test 6
        it('6 . sorts the given array with the desired sorting function name ',()=>{
            let arr = [40,30,10,20];
            let result = sort("selection",arr);
            let expectedResult = [10,20,30,40];
            assert.equal(isEqual(result, expectedResult),true); 
        });
    });


    //----------------------------------------mergeSort()--------------------------------------------------------//

describe('.sort(funcName , array)',()=>{
    
    //test 1
    it('1 . sorts the given array with the desired sorting function name when the original array is null',()=>{
        let arr = [];
        let result = sort("merge",arr);
        let expectedResult = [];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 2
    it('2. sorts the given array with the desired sorting function name when the original array has one element',()=>{
        let arr = [10];
        let result = sort("merge",arr);
        let expectedResult = [10];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 3
    it('3 . sorts the given array with the desired sorting function name',()=>{
        let arr = [20,10];
        let result = sort("merge",arr);
        let expectedResult = [10,20];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 4
    it('4 . sorts the given array with the desired sorting function name',()=>{
        let arr = [30,20,10];
        let result = sort("merge",arr);
        let expectedResult = [10,20,30];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 5
    it('5 . sorts the given array with the desired sorting function name',()=>{
        let arr = [30,30,20,10];
        let result = sort("merge",arr);
        let expectedResult = [10,20,30,30];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 6
    it('6 . sorts the given array with the desired sorting function name',()=>{
        let arr = [40,30,10,20];
        let result = sort("merge",arr);
        let expectedResult = [10,20,30,40];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 7
    it('7 . sorts the given array with the desired sorting function name',()=>{
        let arr = [40,50,30,10,20];
        let result = sort("merge",arr);
        let expectedResult = [10,20,30,40,50];
        assert.equal(isEqual(result, expectedResult),true); 
    });
});

//----------------------------------------quickSort()--------------------------------------------------------//

describe('.sort(funcName , array)',()=>{

    //test 1
    it('1 . sorts the given array with the desired sorting function name when the original array is null',()=>{
        let arr = [];
        let result = sort("quick",arr);
        let expectedResult = [];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 2
    it('2. sorts the given array with the desired sorting function name when the original array has one element',()=>{
        let arr = [10];
        let result = sort("quick",arr);
        let expectedResult = [10];
        assert.deepEqual(result, expectedResult,true); 
    });

    //test 3
    it('3 . sorts the given array with the desired sorting function name',()=>{
        let arr = [20,10];
        let result = sort("quick",arr);
        let expectedResult = [10,20];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 4
    it('4 . sorts the given array with the desired sorting function name',()=>{
        let arr = [30,20,10];
        let result = sort("quick",arr);
        let expectedResult = [10,20,30];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 5
    it('5 . sorts the given array with the desired sorting function name',()=>{
        let arr = [30,30,20,10];
        let result = sort("quick",arr);
        let expectedResult = [10,20,30,30];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 6
    it('6 . sorts the given array with the desired sorting function name when the original array has one element',()=>{
        let arr = [40,30,10,20];
        let result = sort("quick",arr);
        let expectedResult = [10,20,30,40];
        assert.equal(isEqual(result, expectedResult),true); 
    });

    //test 7
    it('7 . sorts the given array with the desired sorting function name',()=>{
        let arr = [40,50,30,10,20];
        let result = sort("quick",arr);
        let expectedResult = [10,20,30,40,50];
        assert.equal(isEqual(result, expectedResult),true); 
    });
});
