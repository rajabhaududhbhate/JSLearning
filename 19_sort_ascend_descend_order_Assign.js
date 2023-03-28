
const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`===============Given Array===============`);
console.log(arrayRollNumbers);

// arrayRollNumbers.sort((a, b)=>{

//     return a > b ? 1 : -1
// })
// console.log(arrayRollNumbers);
console.log(`=============== Array in reverse order ===============`);
arrayRollNumbers.reverse()
console.log(arrayRollNumbers);
console.log(`=============== Sort method without any custome sroting login ===============`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log(`=============== Sorting the array by using custom login ===============`);
arrayRollNumbers.sort((a, b)=>{
    return a > b ? 1 : -1;
});
console.log(arrayRollNumbers);
console.log(`=============== Greatest number from the array ===============`);
let greatestNumber = arrayRollNumbers[arrayRollNumbers.length-1];
console.log(greatestNumber);
console.log(`=============== Smallest number from the array ===============`);
let smallestNumber = arrayRollNumbers[0]
console.log(smallestNumber);
console.log(`=============== Remove Duplicaate number from the array ===============`);
let remvduplicate = [...new Set(arrayRollNumbers)];
console.log(remvduplicate);


