const assert = require('chai').assert;
const util = require('../Utility/DSqueueUtility');


describe('DSqueueUtility.js = enqueue()', function(){
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


describe('DSqueueUtility.js = dequeue()', function(){
    it('should be pass', function(){
        util.dequeue();
    });
});


describe('DSqueueUtility.js = peek()', function(){
    it('should be pass', function(){
        util.peek();
    });
});


describe('DSqueueUtility.js = printQueue()', function(){
    it('should be pass', function(){
        util.printQueue();
    });
});

