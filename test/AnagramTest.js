var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programms : AnagramDetection.js File', function(){
    
    it('Value should be String', function(){
        let a = util.isAnagram("abc", "cba");
        assert.equal(a, true);
    });
    it('Value should not be Number', function(){
        let b = util.isAnagram(5,10);
        assert.equal(b, "Number input is not allowed");
    });
    it('Value should not be undefined', function(){
        let c = util.isAnagram("undefined","undefined");
        assert.equal(c, "Undefined values are not allowed");
    });
    it('Value should not be null', function(){
        let d = util.isAnagram(null,null);
        assert.equal(d, "Null values are not allowed");
    });
 
  
});