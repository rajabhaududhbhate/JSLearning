
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
const firstElement = arrayNumbers[0]
const lastElement = arrayNumbers[arrayNumbers.length - 1]
// console.log(`Total ${arrayNumbers.length} elements are available in the given array`);
// console.log(`First element is ${firstElement[0]} & last element is ${lastElement} `);
// console.log(`${arrayNumbers[arrayNumbers.length - 3]}`);

let sum = 0;
let even = [];
let odd = [];
let evenPositionedElement = 0;
let oddPositionedElement = 0;

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum = sum + element; //
    //console.log(element);

    if (arrayNumbers[index] % 2 == 0) {
        even.push(arrayNumbers[index]);
    
    }
    if (arrayNumbers[index]  % 2 !== 0) {
       odd.push(arrayNumbers[index]);
       
    }

    if(arrayNumbers.indexOf(arrayNumbers[index])%2 ==0){

        evenPositionedElement = evenPositionedElement + arrayNumbers[index];
        
        console.log(arrayNumbers[index]);


    }
    if(arrayNumbers.indexOf(arrayNumbers[index])%2 !==0){

        oddPositionedElement = oddPositionedElement + arrayNumbers[index];
        // console.log(arrayNumbers[index]);

    }

  


}
//console.log(`Sum of an Array Element is ${sum}`);
console.log(`Even of an Array Element is ${even}`);
console.log(`Odd of an Array Element is ${odd}`);
console.log(`Sum of elelement positioned of an Array is ${evenPositionedElement}`);
console.log(`Sum of elelement positioned of an Array is ${oddPositionedElement}`);






// Initializing numbers array
// var numbers = [10, 23, 12, 21];
  
// // Declaring empty Even array
// var even1 = [];
// var even2 = [];
// for(let i = 0; i < numbers.length; i++) {
//        if (numbers[i] % 2 == 0){       
//         even1.push(numbers[i]);
//     }


//     if (numbers[i] % 2 !== 0){   
//        even2.push(numbers[i]);
//     }
// }
  
// // Printing output
// console.log(`Even numbers in an array are: ${even1}`);
// console.log(`Even numbers in an array are: ${even2}`);
