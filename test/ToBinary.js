var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : BinaryConvertion.js', function(){
   
    it('Value should not be null', function(){
        let a = util.toBinary(null);
        assert.equal("Null input are not allowed", a);
    });
    it('Value should not be undefined', function(){
        let a = util.toBinary("undefined");
        assert.equal("Undefined values are not allowed", a);
    });
    it('Value should not be zero', function(){
        let a = util.toBinary(0);
        assert.equal("Zero input is not allowed", a);
    });
    
});