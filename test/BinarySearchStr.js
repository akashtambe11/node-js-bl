var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : BinarySearchStr.js File', function(){
    
    it('Program Execution (Positive)', function(){
        let a = util.binarySearchString(['b', 'c', 'a', 'd', 'g'], 'a');
        assert.equal(true, a);
    });
       
    it('Program Execution (Negative)', function(){
        let a = util.binarySearchString(['b', 'c', 'a', 'd', 'g'], 'l');
        assert.equal(false, a);
    });
    it('Value should not be null', function(){
        let a = util.binarySearchString(null, null);
        assert.equal("Null input are not allowed", a);
    });
    it('Value should not be undefined', function(){
        let a = util.binarySearchString("undefined", "undefined");
        assert.equal("Undefined values are not allowed", a);
    });
    it('Number input is not allowed', function(){
        let a = util.binarySearchString([2, 3], 2);
        assert.equal("Number input is not allowed", a);
    });

});