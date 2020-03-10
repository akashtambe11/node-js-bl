const assert = require('chai').assert;
const dsUtil = require('../Utility/DSutility');

describe('DSutility.js = Programm function: balencePara()',function(){
    it("should be pass", function(){
        dsUtil.balencePara("abc");
    });
    it('should not be undefined', () => {
        var a = dsUtil.balencePara(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = dsUtil.balencePara(null);
        assert.equal("input should not be undefined or null", b);
    });
 
});


describe('DSutility.js = Programm function: bankCounter()',function(){
    it("should be pass", function(){
        dsUtil.balencePara();
    });
    it('should not be undefined', () => {
        var a = dsUtil.balencePara(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = dsUtil.balencePara(null, null);
        assert.equal("input should not be undefined or null", b);
    });
    
});


describe('DSutility.js = Programm function: bankCounter()',function(){
    it("should be pass", function(){
        dsUtil.bankCounter();
    });
    it('should not be undefined', () => {
        var a = dsUtil.bankCounter(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = dsUtil.bankCounter(null, null);
        assert.equal("input should not be undefined or null", b);
    });
    
});


describe('DSutility.js = Programm function: depositMoney()',function(){
    it("should be pass", function(){
        dsUtil.depositMoney();
    });
    it('should not be undefined', () => {
        var a = dsUtil.depositMoney(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = dsUtil.depositMoney(null, null);
        assert.equal("input should not be undefined or null", b);
    });
    
});


describe('DSutility.js = Programm function: withdrawMoney()',function(){
    it("should be pass", function(){
        dsUtil.withdrawMoney();
    });
    it('should not be undefined', () => {
        var a = dsUtil.withdrawMoney(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = dsUtil.withdrawMoney(null, null);
        assert.equal("input should not be undefined or null", b);
    });
    
});


describe('DSutility.js = Programm function: calender()',function(){
    it("should be pass", function(){
        dsUtil.calender();
    });
    it('should not be undefined', () => {
        var a = dsUtil.calender(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = dsUtil.calender(null, null);
        assert.equal("input should not be undefined or null", b);
    });
    
});


describe('DSutility.js = Programm function: isAnagram()',function(){
    it("should be pass", function(){
        dsUtil.isAnagram("abc", "xyz");
    });
    it('should not be undefined', () => {
        var a = dsUtil.isAnagram(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = dsUtil.isAnagram(null, null);
        assert.equal("input should not be undefined or null", b);
    });
 
});


describe('DSutility.js = Programm function: isLeapYear()',function(){
    it("should be pass", function(){
        dsUtil.isLeapYear();
    });
    it('should not be undefined', () => {
        var a = dsUtil.isLeapYear(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = dsUtil.isLeapYear(null);
        assert.equal("input should not be undefined or null", b);
    });
    
}); 


describe('DSutility.js = Programm function: palindromeChecker()',function(){
    it("should be pass", function(){
        dsUtil.palindromeChecker("abc", 3);
    });
    it('should not be undefined', () => {
        var a = dsUtil.palindromeChecker(undefined, undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = dsUtil.palindromeChecker(null, null);
        assert.equal("input should not be undefined or null", b);
    });
 
});


describe('DSutility.js = Programm function: primeRange()',function(){
    it("should be pass", function(){
        dsUtil.primeRange();
    });
    it('should not be undefined', () => {
        var a = dsUtil.primeRange(undefined);
        assert.equal("input should not be undefined or null", a);
    });
    it('should not be null', () => {
        var b = dsUtil.primeRange(null);
        assert.equal("input should not be undefined or null", b);
    });
    
});