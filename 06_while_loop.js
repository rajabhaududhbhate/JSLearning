// WAP to print numbers from 0 to 10
let index=0; // initialization
while (index<=10) { // condition
    console.log(index);
    index++; // Update Expression
}


console.log("Even numbers");
const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

let index2=0; // initialization
let sum = 0;
while (index2<arrayOfNumbers.length) { // condition
    const element = arrayOfNumbers[index2];
    if(element%2==0) {
        console.log(element);
        sum = sum + element;
    }
    index2++; // Update Expression
}
