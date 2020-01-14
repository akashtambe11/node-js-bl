var assert = require('chai').assert;
var util = require('../Utility/FunctionalUtility');

describe('Functional Programs : TwoDimentionalArray.js File', function(){
   
    it('Value should not be null', function(){
        let a = util.twoDimArrray(null, null);
        assert.equal("Null input are not allowed", a);
    });
    it('Value should not be undefined', function(){
        let a = util.twoDimArrray("undefined", "undefined");
        assert.equal("Undefined values are not allowed", a);
    });
    it('Value should not be string', function(){
        let a = util.twoDimArrray("abc", "xyz");
        assert.equal("String input is not allowed", a);
    });
    it('Value should not be zero', function(){
        let a = util.twoDimArrray(0,0);
        assert.equal("Zero input is not allowed", a);
    });
    
});