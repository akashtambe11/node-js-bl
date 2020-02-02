var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : () :arrayIntElementInput()', function(){
    it('should be pass', () =>{
        var a = util.arrayIntElementInput();
    });
    it('should not be undefined', () => {
        var b = util.arrayIntElementInput(undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.arrayIntElementInput(null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.arrayIntElementInput('abc');
        assert.equal("input should be number", d)
    })
    
});