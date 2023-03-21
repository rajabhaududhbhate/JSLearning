console.log('========== Arrow function with No Arguments, No Return value =================');
let show = () =>{
    console.log("Good Morning, Today is Monday");
}

show();
console.log('========== Arrow function with Arguments, No Return value =================');
console.log('========== Multiplication of 3 arguments =================');
let multiply = (num1, num2, num3=1) =>{
   const result = num1 * num2 * num3;
   console.log(result);

}

multiply(5, 5, 2);
console.log('========== Multiplication of 2 arguments and 1 default value =================');
multiply(10, 4 );

console.log('========== Arrow function with Arguments and return value =================');
console.log('========== Addition of 5 arguments =================');

let addition = (arg1, arg2, arg3, arg4, arg5) => {
    console.log(arg1 + arg2 + arg3 + arg4 + arg5)

}

addition(100, 100, 200, 349, 756);
console.log('========== Invoke the same function =================');
addition("I am", " learning", " ES6", " features", " in depth");




let display = (num1) => {
    const result = num1*num1
    console.log(result);
}
display(10);


