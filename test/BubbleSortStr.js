var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : BubbleSortStr.js File', function(){
    
    it('It should not be string', function(){
        let a = util.bubleSortString(['u', 'b', 12]);
        assert.equal("Number elements are is not allowed", a);
    });


});