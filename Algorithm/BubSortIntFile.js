var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

bubFileMain = () => {
    var sortedArr = util.bubSortIntegerFile();
    console.log(sortedArr);
}
bubFileMain();

