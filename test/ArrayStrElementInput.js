var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : () :arrayStrElementInput()', function(){
   
    it('should be pass', () =>{
        var a = util.arrayStrElementInput();
    });
    it('should not be undefined', () => {
        var b = util.arrayStrElementInput(undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.arrayStrElementInput(null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.arrayStrElementInput('abc');
        assert.equal("input should be number", d)
    })
    
});