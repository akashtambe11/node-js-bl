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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/FunctionalUtility');
var algoUtil = require('../Utility/AlgorithmUtility')

/**
 * @description The main function is written to check Coupon Numbers.
 */
couponMain = () => {
    /**
    *@description size is used to take input from user will used to for element input
    *@var {Number} size.
    */
    console.log("\nEnter the quantity of coupons");
    var size = algoUtil.integerInput();

     /**
    * @description Calling coupon method from FunctionalUtility File.
    */
    var count = util.coupon(size);
    console.log("\nTotal Ittration to get all coupons are = "+count);
}

couponMain();
