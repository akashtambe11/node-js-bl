var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : BinarySearchInt.js File', function(){
    
    it('Program Execution (Positive)', function(){
        let a = util.binarySearchInteger([2, 4, 8, 7, 9, 1], 4);
        assert.equal(true, a);
    });
    it('Program Execution (Negative)', function(){
        let a = util.binarySearchInteger([2, 4, 8, 7, 9, 1], 5);
        assert.equal(false, a);
    });
    it('Value should not be null', function(){
        let a = util.binarySearchInteger(null, null);
        assert.equal("Null input are not allowed", a);
    });
    it('Value should not be undefined', function(){
        let a = util.binarySearchInteger("undefined", "undefined");
        assert.equal("Undefined values are not allowed", a);
    });
    it('Value should not be zero', function(){
        let a = util.binarySearchInteger([], 0);
        assert.equal("Zero input is not allowed", a);
    });

});