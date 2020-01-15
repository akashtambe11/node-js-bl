var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : InsertionSortStr.js File', function(){
    
    it('It should not be string', function(){
        let a = util.insertionSortInteger([1, 'b', 12]);
        assert.equal("String elements are is not allowed", a);
    });


});