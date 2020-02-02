var assert = require('chai').assert;
var util = require('../Utility/FunctionalUtility');

describe('Functional Programs : ReplaceString.js File', function(){
  
    it('should be pass', () =>{
        var a = util.replaceString('abc','xyz');
    });
    it('should not be undefined', () => {
        var b = util.replaceString(undefined, undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.replaceString('', '');
        assert.equal("input should not be undefined or null", c);
    });
    it('should be string', () => {
        var d = util.replaceString(12, 25);
        assert.equal("input should be string", d)
    });
    
});