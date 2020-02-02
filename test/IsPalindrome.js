var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : () : isPalindrome()', function(){
   
    it('should be pass', () =>{
        var a = util.isPalindrome();
    });
    it('should not be undefined', () => {
        var b = util.isPalindrome(undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.isPalindrome(null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.isPalindrome('abc');
        assert.equal("input should be number", d)
    })
    
});