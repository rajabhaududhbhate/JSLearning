const employee ={

    id: 415687,
    Name: "Raju",
    country: "US",
    city: "Silicon Valley"

}
console.log("==== in operator =====");
 const isIdAvailable = "id" in employee;
 console.log(isIdAvailable);
 
 console.log(`-----------------------------------------`);
for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key, element);
    }
}
const keysOfEmployee = Object.keys(employee);
console.log(keysOfEmployee);

const valuesOfEmployee = Object.values(employee);
console.log(valuesOfEmployee);

const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee);