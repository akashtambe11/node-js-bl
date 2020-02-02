var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : () : isPrime()', function(){
   
    it('should be pass', () =>{
        var a = util.isPrime();
    });
    it('should not be undefined', () => {
        var b = util.isPrime(undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.isPrime(null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.isPrime('abc');
        assert.equal("input should be number", d)
    })
});