const assert = require('chai').assert;
const util = require('../Utility/DSorderedList');

describe('DSorderedList.js = function: insertAtfirst()',function(){
    it("should be pass", function(){
        util.insertAtFirst(25);
    });
    it('should not be undefined', () => {
        var a = util.insertAtFirst(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.insertAtFirst('');
        assert.equal("input should not be undefined or null", b);
    });
    it('should be number', () => {
        var c = util.insertAtFirst('a');
        assert.equal("input should be number", c)
    });
});



describe('DSorderedList.js = function: insertAtLast()',function(){
    it("should be pass", function(){
        util.insertAtLast(10);
    });
    it('should not be undefined', () => {
        var a = util.insertAtLast(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.insertAtLast('');
        assert.equal("input should not be undefined or null", b);
    });
    it('should be number', () => {
        var c = util.insertAtLast('b');
        assert.equal("input should be number", c)
    });
});



describe('DSorderedList.js = function: insertAtPosition()',function(){
    it("should be pass", function(){
        util.insertAtPosition(55, 2);
    });
    it('should not be undefined', () => {
        var a = util.insertAtPosition(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.insertAtPosition(null, null);
        assert.equal("input should not be undefined or null", b);
    });
    it('should be number for data and index input', () => {
        var c = util.insertAtPosition('a', 'c');
        assert.equal("input should be number", c)
    });
});


describe('DSorderedList.js = function: deleteAtPosition()',function(){
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



describe('DSorderedList.js = function: search()',function(){
    it("should be pass", function(){
        util.search(2);
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
        var c = util.search('loc');
        assert.equal("input should be number", c)
    });
});


describe('DSorderedList.js = function: indexGetData()',function(){
    it("should be pass", function(){
        util.indexGetData();
    });
    it('should not be undefined', () => {
        var a = util.indexGetData(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = util.indexGetData(null);
        assert.equal("input should not be undefined or null", b);
    });
    it('should be number', () => {
        var c = util.indexGetData('abc');
        assert.equal("input should be number", c)
    });
});



