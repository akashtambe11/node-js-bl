var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programms : AnagramDetection.js File', function(){
    
    it('should be pass', () =>{
        var a = util.isAnagram('abc','xyz');
    });
    it('should not be undefined', () => {
        var b = util.isAnagram(undefined, undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.isAnagram('', '');
        assert.equal("input should not be undefined or null", c);
    });
    it('should be string', () => {
        var d = util.isAnagram(12, 25);
        assert.equal("input should be string", d)
    });
  
});