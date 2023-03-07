console.log(`Write a function factorialOfNum() with one argument and return result - 
factorial of that number Call this function with below arguments as shown below, 
Pls log the result with meaning message`);
console.log(` `);
console.log(`***************************************************`);
console.log(`factorialOfNum(5);`);

function fun(){
    let res=1;
  
    for (index=5; index >= 1;  index--) {
        res = res * index;
     }
     return res;
}

var result = fun();

console.log(`Factorial of 5 is : ${result}`);

console.log(` `);
console.log(`***************************************************`);
console.log(`factorialOfNum(3);`);

function factorialOf3 (num2){
    let resFactorial = 1;
    for (index = null; index >= 1; index--){
        resFactorial = resFactorial * index;
    }
    
    return resFactorial;
}
var result = factorialOf3(3);
console.log(`${result}`)
