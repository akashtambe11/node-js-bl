var assert = require('chai').assert;
var util = require('../Utility/AlgorithmUtility');

describe('Algorithm Programs : InsertionSortStr.js File', function(){
    
    it('should be pass', () =>{
        let a = util.insertionSortInteger([2, 4, 8, 7, 9, 1]);
    });
    it('should not be undefined', () => {
        var b = util.insertionSortInteger([4, 8, 5, undefined, 4]);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var c = util.insertionSortInteger([4, 7, null, 8]);
        assert.equal("input should not be undefined or null", c);
    });
    it('should be number', () => {
        var d = util.insertionSortInteger(['n', 'k', 'g']);
        assert.equal("input should be number", d)
    })

});