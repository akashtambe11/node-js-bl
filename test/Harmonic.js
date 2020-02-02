var assert = require('chai').assert;
var util = require('../Utility/FunctionalUtility');

describe('Functional Programs : HarmonicNumber.js File', function(){
    
    it('should be pass', () =>{
        var a = util.harmonic(5);
    });
    it('should not be undefined', () => {
        var b = util.harmonic(undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.harmonic(null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.harmonic('abc');
        assert.equal("input should be number", d)
    })
    
});