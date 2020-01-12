var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

BubFileMain = () => {
    var sortedArr = util.bubSortIntegerFile();
    console.log(sortedArr);
}
BubFileMain();

