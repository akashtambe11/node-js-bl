var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

var str1 = read.question("Enter the string\n");
var str2 = read.question("Enter string to check Anagram\n");

util.isAnagram(str1, str2);