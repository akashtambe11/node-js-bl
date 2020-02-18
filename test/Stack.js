const assert = require('chai').assert;
const util = require('../Utility/DSStackUtility');

describe('DSStackUtility.js = function: push()', function(){
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
    it('should be number', () => {
        var c = util.push('a');
        assert.equal("input should be number", c)
    });
});


describe('DSStackUtility.js = function: pop()',function(){
    it("should be pass", function(){
        util.pop();
    });
});


describe('DSStackUtility.js = function: peek()',function(){
    it("should be pass", function(){
        util.peek();
    });
});


describe('DSStackUtility.js = function: printStack()',function(){
    it("should be pass", function(){
        util.printStack();
        // assert.equal("Stack is Empty", a);
    });
});


describe('DSStackUtility.js = function: balencePara()',function(){
    it("should be pass", function(){
        util.balencePara("abc");
    });
    it('should not be undefined', () => {
        var a = util.balencePara(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.balencePara(null);
        assert.equal("input should not be undefined or null", b);
    });
    it('should be string', () => {
        var c = util.balencePara(25);
        assert.equal("input should be string", c)
    });
});