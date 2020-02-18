const assert = require('chai').assert;
const util = require('../Utility/DSqueueUtility');

describe('DSqueueUtility.js = function: enqueue()', function(){
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
    it('should be number', () => {
        var c = util.enqueue('a');
        assert.equal("input should be number", c)
    });
});


describe('DSqueueUtility.js = function: dequeue()', function(){
    it('should be pass', function(){
        util.dequeue();
    });
});


describe('DSqueueUtility.js = function: peek()', function(){
    it('should be pass', function(){
        util.peek();
    });
});



describe('DSqueueUtility.js = function: printQueue()', function(){
    it('should be pass', function(){
        util.printQueue();
    });
});


describe('DSqueueUtility.js = function: bankCounter()', function(){
    it('should be pass', function(){
        util.bankCounter();
    });
    it('should not be undefined', () => {
        var a = util.bankCounter(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.bankCounter(null, null);
        assert.equal("input should not be undefined or null", b);
    });
    it('should be number', () => {
        var c = util.bankCounter('a', 'b');
        assert.equal("input should be number", c)
    });
});


describe('DSqueueUtility.js = function: depositMoney()', function(){
    it('should be pass', function(){
        util.depositMoney();
    });
    it('should not be undefined', () => {
        var a = util.depositMoney(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.depositMoney(null, null);
        assert.equal("input should not be undefined or null", b);
    });
    it('should be number', () => {
        var c = util.depositMoney('a', 'b');
        assert.equal("input should be number", c)
    });
});


describe('DSqueueUtility.js = function: withdrawMoney()', function(){
    it('should be pass', function(){
        util.withdrawMoney();
    });
    it('should not be undefined', () => {
        var a = util.withdrawMoney(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.withdrawMoney(null, null);
        assert.equal("input should not be undefined or null", b);
    });
    it('should be number', () => {
        var c = util.withdrawMoney('a', 'b');
        assert.equal("input should be number", c)
    });
});