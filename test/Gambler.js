var assert = require('chai').assert;
var util = require('../Utility/FunctionalUtility');

describe('Functional Programs : Gambler.js File', function(){
   
    it('should be pass', () =>{
        var a = util.gamblerSimulator(100, 500, 10);
    });
    it('should not be undefined', () => {
        var b = util.gamblerSimulator(undefined, undefined, undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.gamblerSimulator(null, null, null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.gamblerSimulator('abc', 'xyz', 'opq');
        assert.equal("input should be number", d)
    })
    
});