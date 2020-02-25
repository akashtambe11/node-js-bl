var fs = require('fs');
var algoUtil = require('../Utility/AlgorithmUtility')


class Clinic{
    constructor(){
        var jsonData = fs.readFileSync(__dirname + "/JsonFiles/Clinic.json");
        this.data = JSON.parse(jsonData);
        
    }

    displayData(){
        console.log(this.data);
        
    }


    takeAppointment(){
        console.log("\nEnter Doctor's Name");;
        var drName = algoUtil.stringInput().toLowerCase();

        console.log("\nEnter Appointment Time (AM, PM, Both)");
        var appntTime = algoUtil.stringInput().toUpperCase();
    
        while(appntTime != "AM" && appntTime != "PM" && appntTime != "BOTH"){
            
            console.log("\nEnter valid Time (i.e Am, PM or Both) \n(Enter Again)");
            var appntTime = algoUtil.stringInput().toUpperCase();
        }

        console.log("\nEnter Patient's Name");;
        var pName = algoUtil.stringInput().toLowerCase();
        let patientRegistration = false;

        for(let i in this.data.patient){
            if (this.data.patient[i].pName == pName) {
               patientRegistration = true;
            }
          
        }
        if(patientRegistration == true){
            let i = -1;
            for (let key in this.data.doctor){
                if(this.data.doctor[key].drName == drName)
                i = key;
            }
    
            if(i != -1){
    
                if(this.data.doctor[i].noOfAppointment < 5){
    
                    if(this.data.doctor[i].availability == appntTime || this.data.doctor[i].availability == "BOTH"){
                        this.data.clinicAppointment.push({
                            "drName": drName,
                            "pName": pName,
                            "time": appntTime
                        })
                        this.data.doctor[i].noOfAppointment++;
                        fs.writeFileSync(__dirname + "/JsonFiles/Clinic.json", JSON.stringify(this.data));
                        console.log("Appointment has been Booked Successfully");
                        
                    }
                    else{
                        console.log(`Doctor ${drName} is NOT available in this Time`);
                        
                    }
                }
                else{
                    console.log("Doctor's Appointments are Full");
                    
                }
            }
            else{
                console.log(`Doctor ${drName} is NOT Found`);
                
            }
        }
        else{
            console.log(`\nPatient does NOT Found \n(Please Add "${pName}" in PatientList)`);
            return;
        }        
       

    }


    addPatient(){
        console.log("\nEnter Patient's Name");;
        var pName = algoUtil.stringInput();

        console.log("\nEnter Patient's ID");
        var pId = parseInt(algoUtil.integerInput());

        console.log("\nEnter Patient's Contact No.");
        var contactNo = algoUtil.integerInput();
        while(contactNo.length != 10){
            console.log('\nMobile number should have 10 Digit');
            var contactNo = algoUtil.integerInput();
        }

        console.log("\nEnter Age of Patient");
        var age = parseInt(algoUtil.integerInput());
        
         //Push the above data in patient of clinic.json
         this.data.doctor.push({
            "pName": pName,
            "pId": pId,
            "contactNo": parseInt(contactNo),
            "age": age
        })
        
        fs.writeFileSync(__dirname + "/JsonFiles/Clinic.json", JSON.stringify(this.data));
    }


    
    addDoctor(){
        console.log("\nEnter Doctor's Name");;
        var drName = algoUtil.stringInput();

        console.log("\nEnter Doctor's ID");
        var drId = parseInt(algoUtil.integerInput());

        console.log("\nEnter Doctor's Speciality");
        var speciality = algoUtil.stringInput();

        console.log("\nEnter Availability time of Doctor (AM, PM, Both)");
        var availability = algoUtil.stringInput().toUpperCase();
    
        while(availability != "AM" && availability != "PM" && availability != "BOTH"){
            
            console.log("\nEnter valid Time (i.e Am, PM or Both) \n(Enter Again)");
            var availability = algoUtil.stringInput().toUpperCase();
        }
        
        //Push the above data in doctor of clinic.json
        this.data.doctor.push({
            "drName": drName,
            "drId": drId,
            "speciality": speciality,
            "availability": availability,
            "noOfAppointment": 0
        })
        
        fs.writeFileSync(__dirname + "/JsonFiles/Clinic.json", JSON.stringify(this.data));
    }


    searchPatient(){
        while(true){
            console.log("\n--------PATIENT SEARCH--------- \n1. Search by Name \n2. Search by ID \n3. Search by Conatct No. \n4. Back to Main Menu");
            console.log("\nEnter your Choice");
            var choice = parseInt(algoUtil.integerInput());

            switch(choice){

                    case 1:
                            console.log("Enter name of Patient");
                            var pNameSearch = algoUtil.stringInput().toLowerCase();
                            var search = false;
                            for(let i in this.data.patient){
                                if(this.data.patient[i].pName == pNameSearch){
                                    
                                    this.displayPatientData(i);
                                    search = true;
                                }
                            }

                            if(search == false){
                                console.log(`Patient with Name "${pNameSearch}" does NOT Found`);
                                
                            }
                            break;
                    
                    case 2:
                            console.log("Enter ID of Patient");
                            var pIdSearch = algoUtil.integerInput();
                            var search = false;
                            for(let i in this.data.patient){
                                if(this.data.patient[i].pId == pIdSearch){
                                    
                                    this.displayPatientData(i);
                                    search = true;
                                }
                            }

                            if(search == false){
                                console.log(`Patient with ID "${pIdSearch}" does NOT Found`);
                                
                            }
                            break;

                    case 3:
                            console.log("Enter Contact Number of Patient");
                            var contactNoSearch = algoUtil.integerInput();
                            while(contactNoSearch.length != 10){
                                console.log('\nMobile number should have 10 Digit');
                                var contactNoSearch = algoUtil.integerInput();
                            }

                            var search = false;
                            for(let i in this.data.patient){
                                if(this.data.patient[i].contactNo == contactNoSearch){
                                    
                                    this.displayPatientData(i);
                                    search = true;
                                }
                            }

                            if(search == false){
                                console.log(`Patient with Contact No. "${contactNoSearch}" does NOT Found`);
                                
                            }
                            break;

                    case 4:
                            return;
            
                    default:
                            console.log("Invalid Input (Range 1 - 4)");   
            }
        }
    }


    searchDoctor(){
        while(true){
            console.log("\n--------DOCTOR SEARCH--------- \n1. Search by Name \n2. Search by ID \n3. Search by Speciality \n4. Search by Availability of Tme \n5. Back to Main Menu");
            console.log("\nEnter your Choice");
            var choice = parseInt(algoUtil.integerInput());
            
            switch(choice){

                    case 1:
                            console.log("Enter name of Doctor");
                            var drNameSearch = algoUtil.stringInput().toLowerCase();
                            var search = false;
                            for(let i in this.data.doctor){
                                if(this.data.doctor[i].drName == drNameSearch){
                                    
                                    this.displayDoctorData(i);
                                    search = true;
                                }
                            }

                            if(search == false){
                                console.log(`Doctor with Name "${drNameSearch}" does NOT Found`);
                                
                            }
                            break;
                    
                    case 2:
                            console.log("Enter ID of Doctor");
                            var drIdSearch = algoUtil.integerInput();
                            var search = false;
                            for(let i in this.data.doctor){
                                if(this.data.doctor[i].drId == drIdSearch){
                                    
                                    this.displayDoctorData(i);
                                    search = true;
                                }
                            }

                            if(search == false){
                                console.log(`Doctor with ID "${drIdSearch}" does NOT Found`);
                                
                            }
                            break;

                    case 3:
                            console.log("Enter Speciality of Doctor");
                            var drSpecialitySearch = algoUtil.stringInput().toLowerCase();
                            var search = false;
                            for(let i in this.data.doctor){
                                if(this.data.doctor[i].speciality == drSpecialitySearch){
                                    
                                    this.displayDoctorData(i);
                                    search = true;
                                }
                            }

                            if(search == false){
                                console.log(`Doctor with Speciality "${drSpecialitySearch}" does NOT Found`);
                                
                            }
                            break;
                            
                    case 4:
                            console.log("Enter Availability of time of Doctor");
                            var drAvailabilitySearch = algoUtil.stringInput().toUpperCase();
                            while(drAvailabilitySearch != "AM" && drAvailabilitySearch != "PM" && drAvailabilitySearch != "BOTH"){
            
                                console.log("\nEnter valid Time (i.e Am, PM or Both) \n(Enter Again)");
                                var drAvailabilitySearch = algoUtil.stringInput().toUpperCase();
                            }

                            var search = false;
                            for(let i in this.data.doctor){
                                if(this.data.doctor[i].availability == drAvailabilitySearch || this.data.doctor[i].availability == "BOTH"){
                                    
                                    this.displayDoctorData(i);
                                    search = true;
                                }
                            }

                            if(search == false){
                                console.log(`Doctor with Availability of time "${drAvailabilitySearch}" does NOT Found`);
                                
                            }
                            break;

                    case 5:
                            return;
            
                    default:
                            console.log("Invalid Input (Range 1 - 7)");   
            }
        }
    }

    
    searchSpecialist(){
        console.log("Enter Speciality for search");
        var specialitySearch = algoUtil.stringInput().toLowerCase();
        var search = false;
        for(let i in this.data.doctor){
            if(this.data.doctor[i].speciality == specialitySearch){
                console.log(`\nSpeciality Status for ${specialitySearch} : AVAILABLE`);
                                   
                this.displayDoctorData(i);
                search = true;
            }
        }

        if(search == false){
            console.log(`Doctor with Speciality "${specialitySearch}" does NOT Found`);
                                
        }
    }



    displayPatientData(i){
        console.log("\nPatient's Data ------>"
                    +"\nName      : "+this.data.patient[i].pName
                    +"\nID        : "+this.data.patient[i].pId
                    +"\nContact No: "+this.data.patient[i].contactNo);
    }

    displayDoctorData(i){
        console.log("\nDoctor's DATA ----->"
                    +"\nName             : "+this.data.doctor[i].drName
                    +"\nID               : "+this.data.doctor[i].drId
                    +"\nSpeciality       : "+this.data.doctor[i].speciality
                    +"\nAvailability     : "+this.data.doctor[i].availability
                    +"\nAppointment Count: "+this.data.doctor[i].noOfAppointment);
    }
}


module.exports = new Clinic();