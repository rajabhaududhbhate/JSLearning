const array = [3, 4, 5, 8, 90, 50, 1, 44, 78, 51 ];

let sumOfArrayElement = array.reduce((runningTotal, value)=>{
    return runningTotal + value;

})
console.log(sumOfArrayElement);



// Find the even numbers from the given array and sum it

const arrayOfEven = array.filter( Element =>{
    return Element % 2 == 0;
})
console.log(arrayOfEven);

const sumEven = arrayOfEven.reduce((runneingTotal, value)=>{

    return runneingTotal + value
});
console.log(sumEven);

// Find the odd numbers from the given array and sum it

const arrayNum = [3, 4, 12, 8, 90, 50, 1, 15, 78, 21 ];

// const sum = arrayNum.filter((element)=>{

//     return element % 3 == 0

// }).reduce((runneingTotal, value)=>{
//     return runneingTotal + value
// })
// console.log(sum);





const sum1 = arrayNum.filter((element)=> element % 3 == 0)
.reduce((runneingTotal, value)=> runneingTotal + value)
console.log(sum1);



