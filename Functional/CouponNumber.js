/********************************************************************************************
*Execution    :  default node     cmd> node CouponNumber.js
*
*Purpose      :  To determine random count required to find all coupons.
*@description  
*
*@file        :  CouponNumber.js
*@overview    :  coupon module to print random count required to find all coupons which entered
                 in an array.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

couponMain = () => {
/**
*@description size is used to take input from user will used to for element input
*@var {Number} size.
*/
console.log("Enter the quantity of coupons");
var size = algoUtil.integerInput();

var count = util.coupon(size);
console.log("Total Ittration to get all coupons are = "+count);
}

couponMain();
