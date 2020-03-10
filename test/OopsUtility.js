const assert = require('chai').assert;
const util = require('../Utility/OopsUtility');

describe('OopsUtility.js = Programm function: regExApply()',function(){
    it("should be pass", function(){
        util.regExApply();
    });
    it('should not be undefined', () => {
        var a = util.regExApply(undefined, undefined, undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.regExApply(null, null, null, null);
        assert.equal("input should not be undefined or null", b);
    });
 
});