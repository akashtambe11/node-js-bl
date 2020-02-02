var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : BinarySearchStr.js File', function(){

    it('should be pass', () =>{
        let a = util.binarySearchString(['b', 'c', 'a', 'd', 'g'], 'a');
    });
    it('should not be pass', function(){
        let a = util.binarySearchString(['b', 'c', 'a', 'd', 'g'], 'p');
        assert.equal(false, a);
    });
    it('should not be undefined', () => {
        var b = util.binarySearchString(undefined, undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.binarySearchString(null, null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be string', () => {
        var d = util.binarySearchString(['abc', 'lmn', 'pqr'], 2);
        assert.equal("input key should be string", d)
    })

});