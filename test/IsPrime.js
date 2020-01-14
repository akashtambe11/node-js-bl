var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : () : isPrime()', function(){
   
    it('Value should not be null', function(){
        let a = util.isPrime(null);
        assert.equal("Null input are not allowed", a);
    });
    it('Value should not be undefined', function(){
        let a = util.isPrime("undefined");
        assert.equal("Undefined values are not allowed", a);
    });
    it('Value should not be zero', function(){
        let a = util.isPrime(0);
        assert.equal("Zero input is not allowed", a);
    });
    
});