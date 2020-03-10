const assert = require('chai').assert;
const util = require('../Utility/DSqueueUsingList');

describe('DSqueueUsingList.js = function: enqueue()', function(){
    it('should be pass', function(){
        util.enqueue(10);
    }); 
    it('should not be undefined', () => {
        var a = util.enqueue(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.enqueue(null);
        assert.equal("input should not be undefined or null", b);
    });
   
});


describe('DSqueueUsingList.js = function: dequeue()', function(){
    it('should be pass', function(){
        util.dequeue();
    });
});


describe('DSqueueUsingList.js = function: printStack()', function(){
    it('should be pass', function(){
        util.printStack();
    });
});