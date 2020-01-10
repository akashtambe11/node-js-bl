var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');

var size = read.question("Enter the quantity of coupons\n");

util.coupon(size);