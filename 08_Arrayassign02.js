const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const aarayLength = arrayNumbers.length;
console.log(aarayLength);

let firstElement = arrayNumbers[0];
let lastElement = arrayNumbers[arrayNumbers.length -1];
console.log(`first element is: ${firstElement} & Last element is: ${lastElement}`);


let thirdLastElement = arrayNumbers[arrayNumbers.length-3];
console.log(thirdLastElement);


let index=0;
let evenelementOfarray = [];
while(index < arrayNumbers.length){
    const element = arrayNumbers[index]
    if(element%2==0){
        console.log( [element]);
       evenelementOfarray.push(element);
        
        console.log(arrayNumbers);
    }
    index++;
    
}



// console.log("Even numbers");
// const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

// let index2=0; // initialization
// let sum = 0;
// while (index2<arrayOfNumbers.length) { // condition
//     const element = arrayOfNumbers[index2];
//     if(element%2==0) {
//         console.log(element);
//         sum = sum + element;
//     }
//     index2++; // Update Expression




//     function even(){
//         var arrayEven = [];
//         var arrayOdd = [];
        
//     for (let index = 0; index < arrayNumbers.length; index++) {
//        if (index % 2 === 0){
    
//         arrayEven.push(arrayNumbers[index]);
        
//        } 
      
//     }
//      return arrayEven;
//     }
//     var res = even();
//     var res2 = even();
//     console.log(res);
//     console.log(res2);
// }
