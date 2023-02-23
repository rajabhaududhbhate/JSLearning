function greaterNumber(num1, num2){
   
var result = num1 >= num2 ? num1: num2;
 console.log(`'Find greater than from below and show result'  ${result}`);


}

greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(`                                   `);
console.log(`**********************************************************************`);
console.log(`                                   `);

function number(num1){
    var evenOdd = num1%2 == 0 ? "Even" : "Odd";
    console.log(`This ${num1} is : ${evenOdd}  `);
}

number(29);
number(44);
number(0);
number(101);



console.log(`                                   `);
console.log(`**********************************************************************`);
console.log(`                                   `);

function wordLenght(value1)
{
    var givenWorldLength = value1.length;
    var world_Length = givenWorldLength%2 == 0 ? "Even" : "Odd";
    console.log(`This"${value1}" word's lenght "${givenWorldLength}", This is "${world_Length}" number`); 

}

wordLenght("JavaScript");
wordLenght("Developer");
wordLenght("Google");


console.log(`                                   `);
console.log(`**********************************************************************`);
console.log(`                                   `);
function maleMarriageEligibilitiy(gender, age, boyName){
   var MaleResult = (gender =="Male" && age >=21) ? `Hey "${boyName}" you are eligible for marriage` : `Hey "${boyName}" No try to next time`;
   
  
   console.log(MaleResult);
}

maleMarriageEligibilitiy("Male", 25, "Billgates" );

maleMarriageEligibilitiy("Male", 17, "Stew Jobs" );

console.log(`                                   `);
console.log(`**********************************************************************`);
console.log(`                                   `);
function femaleMarriageEligibilitiy(gender, age, girlName){
    var femaleResult = (gender =="Female" && age >=18) ? `Hey "${girlName}" you are eligible for marriage` : `Hey "${girlName}" No try to next time`;
    
    console.log(femaleResult);
   
 }
femaleMarriageEligibilitiy("Female", 17, "Jenifer" );

femaleMarriageEligibilitiy("Female", 27, "Malinda Gates" );

console.log(`                                   `);
console.log(`**********************************************************************`);
console.log(`                                   `);


function tcsInverview(gradScore, hscScore, sscScore, candidateName){

    var result = (gradScore >= 70) || (hscScore >= 80) || (sscScore > 90);
    console.log(`Congratulation ${candidateName} Your eligible for TCS inverview ${result}` )
}

tcsInverview(80, 86, 90, "Shivam");
tcsInverview(70, 65, 55, "Ajay");
tcsInverview(60, 79, 88, "Sachin");






