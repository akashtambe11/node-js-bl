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

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/OopsUtility');

/**
 * @description The main function is written to maintain inventory data in json file.
 */
invDataMain = () => {
    /**
    * @description Calling invData method from OopsUtility File.
    */
    util.invData();
}

invDataMain();