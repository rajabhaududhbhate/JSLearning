
let bankSbi = {
    bankName: "SBI Bank",
    accountName: "Raju D Dudhbhate",
    accountNo: "65478256987",
   ifscCode: "Saving",
   
}

let bankLocation = {
    street: "JM Road",
    city: "Pune",
    pinCode: "411502"
}

// let rateOfInterest = {
//     homeLoanInterest, personalLoanInterest, dueInterest
// }

const newbankSbi = bankSbi;
console.log(newbankSbi);

console.log("  ");
console.log("=========Object assign========= ");
console.log("  ");

const objectDetails = Object.assign( newbankSbi, bankLocation);
console.log(objectDetails);
console.log(`Type of "objectDetails" is:  ${typeof objectDetails}`);

console.log("  ");
console.log("=========Result by using spread Operator =========");
console.log(" ");
const resultbank = Object.assign({}, bankSbi, bankLocation);
console.table(resultbank);


console.log("  ");
console.log("=========Merge 3 objects =========");

console.log("=========SBI Details ========="); 
console.log(" ");

let rateofInterest = {
    homeLoanInterest : 8.75,
    personalLoanInterest : 12.85,
    dueInterest: 6

}

<<<<<<< Updated upstream
  console.log(` merge object by using loop`)
const mergedObject = Object.assign(newbankSbi, bankLocation, rateofInterest );
console.table(mergedObject);

const arrayOfBaNK = mergedObject

for (const element in mergedObject) {

  
   // console.log(`SBI Bank Details: ${element.bankName}, ${element.accountName}, ${element.accountNo}, ${element.ifscCode}`)
   console.table(element);
    
=======

const mergedObject = Object.assign({}, bankSbi, bankLocation, rateofInterest);;
//console.table(mergedObject);

// const arrayOfBaNK = mergedObject;
for (const element in mergedObject) {
   console.log(`${element}: ${mergedObject[element]}`);
>>>>>>> Stashed changes
}


