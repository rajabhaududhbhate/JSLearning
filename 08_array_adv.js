const arrayOfNames = ["Anil",  "Sunil", "Sita", "Bill", "Elon"];
const result = arrayOfNames.join(": ");
console.log(result);
console.log(typeof result);

console.log("Resize anarray");
console.log(arrayOfNames.length);

arrayOfNames.length = 3;
console.log(arrayOfNames.length);
console.log(arrayOfNames);


arrayOfNames.length = 7;
console.table(arrayOfNames);
