
var num1 = 100;
var num2 = 200;

var str1 = "sweety"
var str2 = "cutey"

var name1 =  "Akshay";
var name2 = "Sachine";

function swapVariables(value1, value2, ){ // value1 = num1, value2 = num2;
    console.log( "Before Swap", value1, value2);
     var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap", value1, value2);
    return "Swapping variables Successfully completed";
}
var swapResult= swapVariables(num1, num2); // Function call or Function invoke
console.log(swapResult);
var swapResult = swapVariables(str1, str2); 
swapVariables(name1, name2);
console.log(swapResult);


function display(num){
console.log(num);
var result = typeof num// number
return result;
}
var displayResult = display(100)
console.log(displayResult)

//function with no arguments and no return value
function showFullName(){
    console.log("My full Name is: Raju Dudhbhate" );
}

showFullName(); // function call of function invoke

//  function with argument and no return value

function showAge(age){
    console.log("My Age is", age);
    
}

showAge(32);


//  function with no argument and no return value
function fullName(){
    var name = "Raju Dudhbhate"
    return name;
}

var fName=fullName();
console.log(fName);


//  function with argument and return value

function sumOfNumbers(num1, num2, num3){
    var sum = num1 + num2 + num3;
    return sum;

}
var sumResult = sumOfNumbers(10, 45, 79);
console.log(sumResult);