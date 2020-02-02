var assert = require('chai').assert;
var util = require('../Utility/FunctionalUtility');

describe('Functional Programs : TwoDimentionalArray.js File', function(){
   
    it('should be pass', () =>{
        var a = util.twoDimArrray();
    });
    it('should not be undefined', () => {
        var b = util.twoDimArrray(undefined, undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.twoDimArrray(null, null);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.twoDimArrray('abc', 'xyz');
        assert.equal("input should be number", d)
    })
    
});