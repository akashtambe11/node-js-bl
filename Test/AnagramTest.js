var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('AnagramDetection.js File', function(){
    it('Value should be String', function(){
        let a = util.isAnagram("abc", "cba");
        assert.equal(a, true);
    });
    it('Value should not be Number', function(){
        let b = util.isAnagram(5,10);
        assert.equal(false, false);
    });
    it('Value should not be undefined', function(){
        let c = util.isAnagram("undefined","undefined");
        assert.equal(c, true);
    });
    it('Value should not be null', function(){
        let d = util.isAnagram(null,null);
        assert.equal(d, undefined);
    });
    it('Type of', function(){
        let d = util.isAnagram("abc", "cba");
        assert.typeOf(d, 'boolean');
    });
  
});