var assert = require('chai').assert;
var util = require('../Utility/FunctionalUtility');

describe('Functional Programs : Coupon.js File', function(){
   
    it('should be pass', () =>{
        var a = util.coupon();
    });
    it('should not be undefined', () => {
        var b = util.coupon(undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.coupon(null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.coupon('abc');
        assert.equal("input should be number", d)
    })
    
});