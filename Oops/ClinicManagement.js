/********************************************************************************************
*Execution    :  default node     cmd> node ClinicManagement.js
*
*Purpose      :  To manage clinic data using json file.
*@description  
*
*@file        :  ClinicManagement.js
*@overview    :  ClinicManagement module is to manage various clinic data and store it in
                 jason file.
*@author      :  Akash Tambe <akashtambe11@gmail.com>
*@version     :  1.0
*********************************************************************************************/

/**
 * @description Dependencies are required to be install before execution of this file.
 */
var util = require('../Utility/OopsClinicUtility')
var algoUtil = require('../Utility/AlgorithmUtility')

/**
 * @description The main function is written to maintain clinic data in json file.
 */
ClinicManagementMain = () => {
        
        /**
         * @description Condition must be reamin true until user exit from process.
         */
        while(true){

                console.log("\n*********************\n+ CLINIC MANAGEMENT +\n*********************\n1. Take an Appointment \n2. Add Patient \n3. Add Doctor \n4. Search for Patient \n5. Search for Doctor \n6. Search for Specialist \n7. Exit");

                console.log("\nEnter your Choice");
                var choice = parseInt(algoUtil.integerInput());
        
                switch(choice){

                        case 1:
                                /**
                                * @description Calling takeAppointment method from OopsClinicUtility File.
                                */
                                util.takeAppointment();
                                break;
                        
                        case 2:
                                /**
                                * @description Calling addPatient method from OopsClinicUtility File.
                                */
                                util.addPatient();
                                break;

                        case 3:
                                /**
                                * @description Calling addDoctor method from OopsClinicUtility File.
                                */
                                util.addDoctor();
                                break;

                        case 4:
                                /**
                                * @description Calling searchPatient method from OopsClinicUtility File.
                                */
                                util.searchPatient();
                                break;

                        case 5:
                                /**
                                * @description Calling searchDoctor method from OopsClinicUtility File.
                                */
                                util.searchDoctor();
                                break;
                            
                        case 6:
                                /**
                                * @description Calling searchSpecialist method from OopsClinicUtility File.
                                */
                                util.searchSpecialist();
                                break;
        
                        case 7:
                                return;
                
                        default:
                                console.log("Invalid Input (Range 1 - 7)");
                        
                }
        }
}

ClinicManagementMain();