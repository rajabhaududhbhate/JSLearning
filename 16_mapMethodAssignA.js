
console.log(`============== Additon 10 into each element and log new array result ================`);

let = arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];


const newaarayNumbers = arrayNumbers.map((element)=>{
    return element+10
})
console.log(newaarayNumbers);


console.log(`======= square of elements and log the result ============`)
const squareofelement = arrayNumbers.map((element)=>{

  return element*element
    
})
console.log(squareofelement);

console.log(`======= Add the index value into its corresponding each array element and log new array result ============`)
// let newIndexArray = []
const newIndexArray = arrayNumbers.map((element, index)=>{
    return element+index

})
console.log(newIndexArray);

// console.log("Using map()");
// const arrayNew = array.map( (element) => {
//    return element + 2;
// } )
// console.log(arrayNew);




// console.log(`Given array ${arrayNumbers}`);

// let additionOfArrayNos = [];


// arrayNumbers.forEach(element =>{
//     let addition = element + 10;
//     additionOfArrayNos.push(addition)
   
// })
// console.log(`=======Added 10 into each element to the array result is as below ============`)

// console.log(arrayNumbers);


// console.log(`======= square of elements and log the result ============`)

// arrayNumbers.forEach(element =>{
  
//   let  squareElement = element*element
//     console.log(squareElement);
// })
