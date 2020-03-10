const assert = require('chai').assert;
const util = require('../Utility/DShashingUtility');


describe('DShashingUtility.js = function: hash()',function(){
    it("should be pass", function(){
        util.hash();
    });
    it('should not be undefined', () => {
        var a = util.hash(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.hash(null, null);
        assert.equal("input should not be undefined or null", b);
    });
 
});


describe('DShashingUtility.js = function: add()',function(){
    it("should be pass", function(){
        util.add();
    });
    it('should not be undefined', () => {
        var a = util.add(undefined, undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.add(null, null, null);
        assert.equal("input should not be undefined or null", b);
    });
 
});


describe('DShashingUtility.js = function: remove()',function(){
    it("should be pass", function(){
        util.remove();
    });
    it('should not be undefined', () => {
        var a = util.remove(undefined, undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.remove(null, null, null);
        assert.equal("input should not be undefined or null", b);
    });
 
});


describe('DShashingUtility.js = function: print()',function(){
    it("should be pass", function(){
        util.print();
    });
    it('should not be undefined', () => {
        var a = util.print(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.print(null, null);
        assert.equal("input should not be undefined or null", b);
    });
 
});