// Object literals

let student = {
firstName: "Raju",
lastName: "Dudhbhate",
isWorking: true,
age: "36",
collegeName: "ABC",
id: 123456

}
console.log(student);
console.log(typeof student);
// . Dot Notation
console.log(student.firstName);

// [] Notation
console.log(student["lastName"]);

// update property

student.collegeName = "COEP PUNE";


console.log(student.age);
student.city = "Mumbai";
student.country = "India";
delete student.isWorking;
console.table(student);


// Empty object

let teacher ={

}

teacher.firstName = "Mohit";
console.log(teacher);



