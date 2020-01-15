var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : BubbleSortInt.js File', function(){
    
    it('It should not be string', function(){
        let a = util.bubleSortInteger(['e', 'b', 12]);
        assert.equal("String elements are is not allowed", a);
    });


});