console.log(`=========== Arithmetic Operator ============`);
var num1 = 10;
var num2 = 2;
var result = num1 + num2;  // Addition
console.log(`Addition is ${result}`);

var result = num1 - num2; // substraction
console.log(`sbustration is ${result}`);

var result = num1 * num2; // multiplication
console.log(`multiplication is ${result}`);


var result = num1 ** num2; // Exponential
console.log(`Exponential is ${result}`);

var result = num1 / 3; // Division
console.log(`Division is ${result}`);

var result = num1 % 3; // Modulus
console.log(`Reminder is ${result}`);

var result = num1 ** 3; // Exponential
console.log(`Exponential is ${result}`);

var num = 10; // compund addition +=
num +=20 //num = num + 20
console.log(`compund addition += ${num}`);

var num3 = "10";
var num4 = 10;
console.log(num3==num4);

var num3 = "10";
var num4 = 10;
console.log(num3===num4);

var num3 = "10";
var num4 = 10;
console.log(num3!==num4); //Not equal

console.log(10 > 20); // Grater than
console.log(20 < 10); // Grater than

console.log(10 < 10); // Less than


var marks = 35; //greater than equal
console.log(marks >= 35); // 

// Is marks greater than equal 35


var marks = 35; //greater than equal
console.log(marks <= 35); // 

// Is marks greater than equal 35


var marks = 70;
var result = marks >=60 ? "Allow him for Interview" : "Don't Allow"
console.log(result);

var age = 22;

var res = age>= 21 ? true : false;
console.log(res);

console.log("**********************");

console.log("Even or Odd");
var myNumber = 7;
//Even - divide by 2 and reminder is 0
result = myNumber%2 == 0 ? "Even" : "Odd";
console.log(result);


var num1 = 10;
var num2 = 12;
var result = num1 >= num2 ? num1 : num2;
console.log(result);


function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );
 console.log("**********************");
 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);


  console.log("difference bet == and ===");
  // string number and boolean
  var num1 = 10; 
  var num2 = "32";
  console.log( num1 == num2); // 10 == "10"
  console.log( num1 == num2); // 10 === "10"