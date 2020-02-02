var assert = require('chai').assert;
var util = require('../Utility/FunctionalUtility');

describe('Functional Programs : LeapYear.js File', function(){
    
    it('should be pass', () =>{
        var a = util.isLeapYear(2016);
    });
    it('should not be undefined', () => {
        var b = util.isLeapYear(undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.isLeapYear(null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.isLeapYear('abc');
        assert.equal("input should be number", d)
    })
    
});