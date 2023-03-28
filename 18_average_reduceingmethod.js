const array_numbers = [20, 11, 40, 25, 23, 11, 9, 90, 60, 2, 19];

let average = null;

let sum = array_numbers.reduce((runningTotal, value)=>{
    runningTotal = runningTotal + value;

    if(index = array_numbers.length-1){
        average = runningTotal / array_numbers.length
    }
    return runningTotal;

})
console.log(`${sum}, ${array_numbers.length} ${average}`);