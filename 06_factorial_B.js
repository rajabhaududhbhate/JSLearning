// console.log(`Assignment B: Factorial of a number, File- 06_factorial_B.js
// Write a function factorialofWordsCount() with one argument.
// 1. Call this function with below arguments as shown below, Pls log the result with meaning message
// 2. In this function count the total number of words available in the received argument string
// 3. Calculate the factorial - total word count and then result this as a result
// • factorialofWordsCount("Revision is the mother of Success");
// • factorialofWordsCount("We never fail, we always learn");
// • factorialofWords Count(null)
// • factorialofWordsCount("*)
// factorialofWordsCount("You Full name"); // PIs pass here you full name as a string
// Note: Don't forget to handle the unhappy scenario's for values like null, undefined, NaN`);

function factorialofWordsCount(arg){
    
    if (arg == 0 || arg == null){
        console.log(`invalid data`);

    } else if (index = 1, index >=1, index--){
       
    let res = arg.split(" ").length;
       console.log(`Given string is ${arg} and word count : ${res}`);
        let result = res;
    let fact = 1;
        for(index = result; index>=1; index--){
            fact = fact * index;
            
        }
        console.log(`Word count is :${result} and it's Factorial is: ${fact}`);

    }
   
}






factorialofWordsCount("Revision is the mother of Success");
console.log(`=================================`);
factorialofWordsCount("We never fail, we always learn");
console.log(`=================================`);
factorialofWordsCount(null);
console.log(`=================================`);
factorialofWordsCount("");
console.log(`=================================`);
factorialofWordsCount("Raju D Dudhbhate");
console.log(`=================================`);
factorialofWordsCount(undefined);
console.log(`=================================`);
//factorialofWordsCount(NaN);


