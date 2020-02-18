var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : DayOfWeek.js - isRightDate()', function(){
     
    it('should be pass', () =>{
        var a = util.isRightDate(12);
    });
    it('should not be undefined', () => {
        var b = util.isRightDate(undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.isRightDate(null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.isRightDate('abc');
        assert.equal("input should be number", d)
    })
    
});


describe('Algorithm Programs : DayOfWeek.js - isRightMonth()', function(){
     
    it('should be pass', () =>{
        var a = util.isRightMonth(11);
    });
    it('should not be undefined', () => {
        var b = util.isRightMonth(undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.isRightMonth(null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.isRightMonth('abc');
        assert.equal("input should be number", d)
    })
    
});


describe('Algorithm Programs : DayOfWeek.js - isRighYear()', function(){
     
    it('should be pass', () =>{
        var a = util.isRighYear(1996);
    });
    it('should not be undefined', () => {
        var b = util.isRighYear(undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.isRighYear(null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.isRighYear('abc');
        assert.equal("input should be number", d)
    })
    
});


describe('Algorithm Programs : DayOfWeek.js - dayOfWeek()', function(){
     
    it('should be pass', () =>{
        var a = util.dayOfWeek(14, 11, 2016);
    });
    it('should not be undefined', () => {
        var b = util.dayOfWeek(undefined, undefined, undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.dayOfWeek(null, null, null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.dayOfWeek('abc', 'pqr', 'lmn');
        assert.equal("input should be number", d)
    })
    
});