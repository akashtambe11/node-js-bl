var assert = require('chai').assert;
var util = require('../Utility/FunctionalUtility');

describe('Functional Programs : HarmonicNumber.js File', function(){
    
    it('Input is executed (Positive)', function(){
        let a = util.harmonic(5);
        assert.equal(2.283333333333333, a);
    });
    it('Value should not be null', function(){
        let a = util.harmonic(null);
        assert.equal("Null input are not allowed", a);
    });
    it('Value should not be undefined', function(){
        let a = util.harmonic("undefined");
        assert.equal("Undefined values are not allowed", a);
    });
    it('Value should not be string', function(){
        let a = util.harmonic("abc");
        assert.equal("String input is not allowed", a);
    });
    it('Value should not be zero', function(){
        let a = util.harmonic(0);
        assert.equal("Zero input is not allowed", a);
    });
    
});