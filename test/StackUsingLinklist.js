const assert = require('chai').assert;
const util = require('../Utility/DSstackUsingList');

describe('DSstackUsingList.js = function: push()', function(){
    it('should be pass', function(){
        util.push(10);
    }); 
    it('should not be undefined', () => {
        var a = util.push(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.push(null);
        assert.equal("input should not be undefined or null", b);
    });
   
});


describe('DSstackUsingList.js = function: pop()', function(){
    it('should be pass', function(){
        util.pop();
    });
});


describe('DSstackUsingList.js = function: peek()', function(){
    it('should be pass', function(){
        util.peek();
    });
}); 


describe('DSstackUsingList.js = function: printStack()', function(){
    it('should be pass', function(){
        util.printStack();
    });
}); 

