var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : InsertionSortStr.js File', function(){
    
    it('should be pass', () =>{
        let a = util.insertionSortString(['a', 'c', 'e', 'g']);
    });
    it('should not be undefined', () => {
        var b = util.insertionSortString(['a', 'c', 'e', undefined, 'n']);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.insertionSortString(['a', 'c', 'e', null, 'n']);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be string', () => {
        var d = util.insertionSortString([2, 5, 6, 9, 8]);
        assert.equal("input should be string", d)
    })

});