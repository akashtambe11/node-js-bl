var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : vendingMachine.js', function(){
   
    it('should be pass', () =>{
        var a = util.vendingMachineCal();
    });
    it('should not be undefined', () => {
        var b = util.vendingMachineCal([1000, 500, 100, 50, 20, 10, 5, 2, 1], undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.vendingMachineCal([1000, 500, 100, 50, 20, 10, 5, 2, 1], null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.vendingMachineCal([1000, 500, 100, 50, 20, 10, 5, 2, 1], 'abc');
        assert.equal("input should be number", d)
    })
});