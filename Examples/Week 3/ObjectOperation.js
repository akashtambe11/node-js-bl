//Creating object

var marks = {
    subject1: 90, //Object
    subject2: 70, //Object
    subject3: 50, //Object

    total : () => { //Method
        return this.subject1 + this.subject2 + this.xspecifysubject3;
    }
}

//Object Instance of marks
const subMarks = Object.create(marks);

console.log("Subject 1 Marks = "+subMarks.subject1);
console.log("Subject 2 Marks = "+subMarks.subject2);
console.log("Subject 3 Marks = "+subMarks.subject3);


//update
subMarks.subject1 = 50;
console.log("\nupdated Subject 1 Marks = "+subMarks.subject1);


//Delete
delete marks.subject2;

console.log("\nDelete Subject 2 Marks = "+marks.subject2);