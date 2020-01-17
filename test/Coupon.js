var assert = require('chai').assert;
var util = require('../Utility/FunctionalUtility');

describe('Functional Programs : Coupon.js File', function(){
   
    it('Value should not be null', function(){
        let a = util.coupon(null);
        assert.equal("Null input are not allowed", a);
    });
    // it('Value should not be undefined', function(){
    //     let a = util.coupon(undefined);
    //     assert.equal("Undefined values are not allowed", a);
    // });
    it('Value should not be zero', function(){
        let a = util.coupon(0);
        assert.equal("Zero input is not allowed", a);
    });
    
});