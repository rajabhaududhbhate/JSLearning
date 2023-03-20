
var num1 = 100;
var num2 = 200;

var str1 = "Sweety"
var str2 = "cutey"

function swapVariables(value1, value2, value3) // value1 = num1, value2 = num2
{
    console.log("Before swap:", value1, value2, 50);
    var temp = value1;
    value1=value2;
    value2=temp;
    console.log("After swap:", value1, value2, 60);
    return "Swapping completed successfully"
}

var swapResult = swapVariables(num1, num2);// Function call or Function invoke
console.log(swapResult);
swapVariables(str1, str2);// Function call or Function invoke


