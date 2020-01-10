var assert = require('assert');
var util = require('../Utility/AlgorithmUtility')


  describe('DEMOadd', function() {
    it('Should be number', function(){
      assert.equal(false, util.add("a","5"));
    });
    it('Should be number', function(){
      assert.equal(false, util.add("abc","xyz"));
    });
    it('with both positive values', function(){
      assert.equal(15, util.add(10, 5));
    });
    it('with one negative values', function(){
      assert.equal(4, util.add(5, -1));
    });
  });

