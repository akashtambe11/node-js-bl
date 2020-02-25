var util = require('../Utility/OopsClinicUtility')
var algoUtil = require('../Utility/AlgorithmUtility')


ClinicManagementMain = () => {

        while(true){

                console.log("\n*********************\n+ CLINIC MANAGEMENT +\n*********************\n1. Take an Appointment \n2. Add Patient \n3. Add Doctor \n4. Search for Patient \n5. Search for Doctor \n6. Search for Specialist \n7. Exit");
                // util.displayData();

                console.log("\nEnter your Choice");
                var choice = parseInt(algoUtil.integerInput());
        
                switch(choice){

                        case 1:
                                util.takeAppointment();
                                break;
                        
                        case 2:
                                util.addPatient();
                                break;

                        case 3:
                                util.addDoctor();
                                break;

                        case 4:
                                util.searchPatient();
                                break;

                        case 5:
                                util.searchDoctor();
                                break;
                            
                        case 6:
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