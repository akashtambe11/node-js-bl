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
        // for(let i in this.data.patient){
        //     if (this.data.patient[i].pName == pName) {
        //         // console.log("Patient Found");
            
        //     }
        //     else{
        //         console.log(`\nPatient NOT Found \n(Please Add ${pName} in PatientList)`);
        //         return;
        //     }
                
        // }

        let i = -1;
        for (let key in this.data.doctor){
            if(this.data.doctor[key].drName == drName)
            i = key;
        }

        if(i != -1){

            if(this.data.doctor[i].noOfAppointment < 5){

                if(this.data.doctor[i].availability == appntTime){
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

}


module.exports = new Clinic();