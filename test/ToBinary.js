var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : BinaryConvertion.js', function(){
   
    it('should be pass', () =>{
        var a = util.toBinary();
    });
    it('should not be undefined', () => {
        var b = util.toBinary(undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.toBinary(null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.toBinary('abc');
        assert.equal("input should be number", d)
    })
    
});