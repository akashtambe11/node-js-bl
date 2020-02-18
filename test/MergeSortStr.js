var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : mergeSortStr.js File', function(){
    
    it('should be pass', () =>{
        let a = util.mergeSortString(['a', 'c', 'e', 'g']);
    });
    it('should not be undefined', () => {
        var b = util.mergeSortString(['a', 'c', 'e', undefined, 'n']);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.mergeSortString(['a', 'c', 'e', null, 'n']);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be string', () => {
        var d = util.mergeSortString([2, 5, 6, 9, 8]);
        assert.equal("input should be string", d)
    })

});