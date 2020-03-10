const assert = require('chai').assert;
const util = require('../Utility/DSdeQueueUtility');


describe('DSdeQueueUtility.js = function: enqueFront()',function(){
    it("should be pass", function(){
        util.enqueFront();
    });
    it('should not be undefined', () => {
        var a = util.enqueFront(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.enqueFront(null, null);
        assert.equal("input should not be undefined or null", b);
    });
 
});


describe('DSdeQueueUtility.js = function: enqueRear()',function(){
    it("should be pass", function(){
        util.enqueRear();
    });
    it('should not be undefined', () => {
        var a = util.enqueRear(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.enqueRear(null, null);
        assert.equal("input should not be undefined or null", b);
    });
 
});


describe('DSdeQueueUtility.js = function: getFront()',function(){
    it("should be pass", function(){
        util.getFront();
    });
});


describe('DSdeQueueUtility.js = function: getRear()',function(){
    it("should be pass", function(){
        util.getRear();
    });
});


describe('DSdeQueueUtility.js = function: deQueueRear()',function(){
    it("should be pass", function(){
        util.deQueueRear(3);
    });
    it('should not be undefined', () => {
        var a = util.deQueueRear(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.deQueueRear(null);
        assert.equal("input should not be undefined or null", b);
    });
 
});


describe('DSdeQueueUtility.js = function: printQueue()',function(){
    it("should be pass", function(){
        util.printQueue(3);
    });
    it('should not be undefined', () => {
        var a = util.printQueue(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.printQueue(null);
        assert.equal("input should not be undefined or null", b);
    });
 
});