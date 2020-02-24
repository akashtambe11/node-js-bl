var util = require('../Utility/OopsClinicUtility')
var algoUtil = require('../Utility/AlgorithmUtility')


ClinicManagementMain = () => {

        while(true){

                console.log("\n1. Search for Doctor \n2. Search for Patient \n3. Add Doctor \n4. Add Patient \n5. Take an Appointment \n6. Search for Specialist \n7. Exit");
                // util.displayData();

                console.log("\nEnter your Choice");
                var choice = parseInt(algoUtil.integerInput());
        
                switch(choice){
        
                        case 1:
                                util.searchDoctor();
                                break;
                            
                        case 2:
                                util.searchPatient();
                                break;
                            
                        case 3:
                                util.addDoctor();
                                break;
                
                        case 4:
                                util.addPatient();
                                break;
                            
                        case 5:
                                util.takeAppointment();
                                break;
                
                        case 6:
                                util.popularDoctor();
                                break;
        
                        case 7:
                                return;
                
                        default:
                                console.log("Invalid Input (Range 1 - 5)");
                        
                }
            }
       
      



}

ClinicManagementMain();