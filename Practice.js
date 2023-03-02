// var marks = 70;
//  var resultMarks = marks >= 60 ? `Allow him for Interview` : `Don't Allow`;
//  console.log(resultMarks);


// var age=21;
// var result = age >= 21 ? `Congratulation` : 'Ha haa No nest time';
// console.log(result);

// var age=20;
// var result = age >= 21 ? `Congratulation` : 'Ha haa No nest time';
// console.log(result);

// console.log(`*****************************************`);


// var myNumber = 7; 
// console.log(myNumber%2==0);
// var result = myNumber%2 == 0 ? `Even` : `Odd`;
// console.log(result);
// console.log(`*****************************************`);

// var num1 = 10;
// var num2 = 12;

// var result = num1 > num2 ? num1  : num2;

// console.log(result);


console.log(`*****************************************`);


function greaterNumber(num1, num2){
   var result = num1> num2 ? num1 : num2;
   console.log(` Greter number amongst ${num1} ${num2} is : ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);


console.log(`*****************************************`);


function isEvenorOddNum(num){
 var result = num%2 == 0 ? `${num} This is EVEN` : `${num} This is ODD`;
 console.log(result);
}
isEvenorOddNum(29)
isEvenorOddNum(44)
isEvenorOddNum(0)
isEvenorOddNum(101)

 
console.log(`*****************************************`);

function wordLenght(word){
    var wordLenght = word.length;
    var result = wordLenght%2==0 ? "EVEN" : "ODD";
    return result;
}
var reslult = wordLenght("JavaScript");
console.log(`Word "JavaScript" has ${reslult} lenght`);
console.log(`Word "Google Chrome" has ${wordLenght("Google Chrome")} lenght`);
console.log(`Word "Developer" has ${wordLenght("Developer")} lenght`);

console.log(`*****************************************`);

function maleMarriageEligibilitiy(gender, age, boyName)
{
    var result = gender == "Male" && age >= 21 ? `Hey boy ${boyName} you are eligible for marriage` : `Hey boy ${boyName} you can try next time`;
    return (result);

}
var res = maleMarriageEligibilitiy ("Male", 25, "Billgates");
console.log(res);
console.log(`${maleMarriageEligibilitiy ("Male", 17, "Stewjob")}`);
console.log(`${maleMarriageEligibilitiy ("Male", 35, "Bob")}`);

console.log(`*****************************************`);

function eligibleInterview(gradScore, hscScore, sscScore, cadidateName){
//     if (gradScore >= 70 || hscScore>= 80 || sscScore >= 90){

//     console.log(`Congrates ${cadidateName} you are eligible for TCS interview` );
// }else{
//     console.log(`Sorry ${cadidateName} Unfortunately you are not eligible for interview` );
// }
    var result = (gradScore >= 70 || hscScore>= 80 || sscScore >= 90) ? `Congrates ${cadidateName} you are eligible for TCS interview` :  `Sorry ${cadidateName} Unfortunately you are not eligible for interview`;
    return result;
}
var res = eligibleInterview(80, 86, 90, "Shyam");
console.log(res);
console.log(`${eligibleInterview(70, 65, 55, "Ram")}`)
console.log(`${eligibleInterview(60, 79, 88, "Geeta")}`)

console.log(`*****************************************`);

var num1 = 10
var num2 = "10"
console.log( num1 == num2); // 10 == 10 value and type
 
console.log(10 + " Hi");
console.log("Good" + " Morning");

console.log("Operation: 10-Hi ==> ", 10 - "Hi");  // Not a Number
console.log( 0/0); 

var num = "10";
console.log(typeof num);

console.log(`*****************************************`);

 