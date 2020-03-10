/********************************************************************************************
*Execution    :  default node     cmd> node Inventory.js
*
*Purpose      :  To display inventory data of pulse, rice and wheat from json file.
*@description  
*
*@file        :  Inventory.js
*@overview    :  Inventory module is to show json data of pulses, rice and wheat.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/
var util = require('../Utility/OopsUtility');

invDataMain = () => {
    util.invData();
}

invDataMain();