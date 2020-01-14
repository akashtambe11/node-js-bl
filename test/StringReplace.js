var assert = require('chai').assert;
var util = require('../Utility/FunctionalUtility');

describe('Functional Programs : ReplaceString.js File', function(){
    
    it('Input is executed (Positive)', function(){
        let a = util.replaceString("Hello '<<UserName>>', How are you?", "Akash");
        assert.equal("Hello 'Akash', How are you?", a);
    });
    it('Value should not be null', function(){
        let a = util.replaceString("", "");
        assert.equal("Null input are not allowed", a);
    });
    it('Value should not be undefined', function(){
        let a = util.replaceString("undefined","undefined");
        assert.equal("Undefined values are not allowed", a);
    });
    it('Value should not be number', function(){
        let a = util.replaceString(5, 25);
        assert.equal("Number input is not allowed", a);
    });
    
    
});