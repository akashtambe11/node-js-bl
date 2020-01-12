var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

couponMain = () => {
console.log("Enter the quantity of coupons");
var size = algoUtil.integerInput();

var count = util.coupon(size);
console.log("Total Ittration to get all coupons are = "+count);
}

couponMain();
