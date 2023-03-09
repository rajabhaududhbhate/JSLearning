// Object literals

let student = {
firstName: "Raju",
lastName: "Dudhbhate",
isWorking: true,
age: "36",
collegeName: "ABC",
id: 123456,
city: "Pune"


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




// Object literals

let student2 = {
    firstName: "Raju",
    lastName: "Dudhbhate",
    isWorking: true,
    age: "36",
    collegeName: "ABC",
    id: 123456,
    address:{
        Street: "Wakad",
    city: "Pune",
    PIN: "415231"
}, 
school : "Podar School",
friends : ["Bill", "Stew", "Elon"],
show: function(){
    console.log("I am show() function");
}
    
    
    }

//     student2.address.PIN = 431205;
//     console.table(student2);
// console.log(student2.friends[student2.friends.length-1]);

student.show();




