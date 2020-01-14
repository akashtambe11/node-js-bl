var assert = require('chai').assert;
var util = require('../Utility/FunctionalUtility');

describe('Functional Programs : LeapYear.js File', function(){
    
    it('Input is executed (Positive)', function(){
        let a = util.isLeapYear(2016);
        assert.equal(true, a);
    });
    it('Input is executed (Negative)', function(){
        let a = util.isLeapYear(2019);
        assert.equal(false, a);
    });
    it('Value should not be null', function(){
        let a = util.isLeapYear(null);
        assert.equal("Null input are not allowed", a);
    });
    it('Value should not be undefined', function(){
        let a = util.isLeapYear("undefined");
        assert.equal("Undefined values are not allowed", a);
    });
    it('Value should not be zero', function(){
        let a = util.isLeapYear(0);
        assert.equal("Zero input is not allowed", a);
    });
    
});