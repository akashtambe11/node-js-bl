var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : BinarySearchInt.js File', function(){
    
    it('should be pass', () =>{
        let a = util.binarySearchInteger([2, 4, 8, 7, 9, 1], 4);
    });
    it('should not be pass', function(){
        let a = util.binarySearchInteger([2, 4, 8, 7, 9, 1], 5);
        assert.equal(false, a);
    });
    it('should not be undefined', () => {
        var b = util.binarySearchInteger(undefined, undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.binarySearchInteger(null, null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.binarySearchInteger(['abc', 'lmn', 'pqr'], 'xyz');
        assert.equal("input should be number", d)
    })
});