const assert = require('chai').assert;
const util = require('../Utility/DSunOrderedList');

describe('DSunOrderedList.js = function: insertAtfirst()',function(){
    it("should be pass", function(){
        util.insertAtFirst("abc");
    });
    it('should not be undefined', () => {
        var a = util.insertAtFirst(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.insertAtFirst('');
        assert.equal("input should not be undefined or null", b);
    });
    it('should be string', () => {
        var c = util.insertAtFirst(25);
        assert.equal("input should be string", c)
    });
});



describe('DSunOrderedList.js = function: insertAtLast()',function(){
    it("should be pass", function(){
        util.insertAtLast("abc");
    });
    it('should not be undefined', () => {
        var a = util.insertAtLast(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.insertAtLast('');
        assert.equal("input should not be undefined or null", b);
    });
    it('should be string', () => {
        var c = util.insertAtLast(25);
        assert.equal("input should be string", c)
    });
});



describe('DSunOrderedList.js = function: insertAtPosition()',function(){
    it("should be pass", function(){
        util.insertAtPosition("abc", 2);
    });
    it('should not be undefined', () => {
        var a = util.insertAtPosition(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.insertAtPosition('', null);
        assert.equal("input should not be undefined or null", b);
    });
    it('should be string for data input', () => {
        var c = util.insertAtPosition(25, 5);
        assert.equal("input data should be string", c)
    });
    it('should be number for Index input', () => {
        var c = util.insertAtPosition('abc', 'xyz');
        assert.equal("input Index should be number", c)
    });
});


describe('DSunOrderedList.js = function: deleteAtPosition()',function(){
    it("should be pass", function(){
        util.deleteAtPosition(3);
    });
    it('should not be undefined', () => {
        var a = util.deleteAtPosition(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.deleteAtPosition(null);
        assert.equal("input should not be undefined or null", b);
    });
    it('should be string', () => {
        var c = util.deleteAtPosition('abc');
        assert.equal("input should be number", c)
    });
});



describe('DSunOrderedList.js = function: search()',function(){
    it("should be pass", function(){
        util.search("abc");
    });
    it('should not be undefined', () => {
        var a = util.search(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.search('');
        assert.equal("input should not be undefined or null", b);
    });
    it('should be string', () => {
        var c = util.search(25);
        assert.equal("input should be string", c)
    });
});

describe('DSunOrderedList.js = function: indexGetData()',function(){
    it("should be pass", function(){
        util.indexGetData(3);
    });
    it('should not be undefined', () => {
        var a = util.indexGetData(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.indexGetData(null);
        assert.equal("input should not be undefined or null", b);
    });
    it('should be string', () => {
        var c = util.indexGetData('abc');
        assert.equal("input should be number", c)
    });
});



