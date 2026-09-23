class Student{
    static totalStudents = 0;
    constructor(rollNo, name, marks){
        this.rollNo=rollNo;
        this.name=name;
        this.marks=marks;
        Student.totalStudents++;
    }
    displayResult() {
        console.log("Roll No:",this.rollNo);
        console.log("Name:",this.name);
        console.log("Marks:",this.marks);
         if (this.marks>=40) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }
        console.log("");
    }
    static displayTotalStudents() {
        console.log("Total Students Created:", Student.totalStudents);
    }
}
let s1 = new Student(149,"Raj",85);

s1.displayResult();

Student.displayTotalStudents();