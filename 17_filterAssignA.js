
console.log("============================== Element greater than 50 ==============================");
let = arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

let greaterNumbers = arrayNumbers.filter(element => {
    return element > 50
});
console.log(greaterNumbers);

console.log("============================== All event numbers from given array ==============================");

let eventNumbers = arrayNumbers.filter(element =>{
    return element%2==0
})
console.log(eventNumbers);

console.log("============================== All Odd numbers from given array ==============================");

let oddNumbers = arrayNumbers.filter(element =>{

    return element % 2 !== 0
})
console.log(oddNumbers);


console.log("============================== Multiple of 5 numbers from given array ==============================");

let multileof = arrayNumbers.filter(element => {
    return element % 5 == 0
})
console.log(multileof);

console.log("============================== Numbers between 20 & 50 ==============================");

let result = arrayNumbers.filter(element =>{
    return element > 20 && element <= 50
});
console.log(result);