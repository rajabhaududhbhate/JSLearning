console.log("If statement");
var num = 10;
if(num>0) {
    console.log("Inside if");
    console.log(`Number is positive ${num}`);

}
console.log(`End`);


console.log("**************");

var ageForVote = 20;
if (ageForVote>=18){
    console.log("you are eligible for voting");
    console.log(`Age is : ${ageForVote}`);
}
console.log("End of next if block");



console.log("**************");

var ageForVote = 10;
if (ageForVote>=18)
    console.log("you are eligible for voting");
    console.log(`Age is : ${ageForVote}`);

console.log("End of next if block");

console.log("**************");

function checkEventOdd(num){

    if(num%2==0){
        return "Even";
    }
    
    if(num%2!=0){
        return "Odd";
    }
    
}

var result = checkEventOdd(45);
 console.log(`Given number 45 is ${result}`);

 var result = checkEventOdd(70);
 console.log(`Given number 70 is ${result}`);

 var result =  checkEventOdd(0);
 console.log(`Given number 0 is ${result}`);


 console.log("**************");


 var num1 = 5;
 if(1>0){
    console.log(`Number ${num1} is positive`);
 }
 else{
    console.log(`Number ${num1} is Negative`);
 }

console.log("End of if else block");





 function maleMarriageEligibility(gender, age, boyName){
    if(gender == "Male" && age>=21){
        console.log(`Hey ${boyName} you are eligible for marraige`);
    }else{

        console.log(`Hey ${boyName} you are not eligible for marraige`);
    }

 }

 maleMarriageEligibility ("Male", 25, "Billgates");
 maleMarriageEligibility ("Male", 20, "Anil");

console.log("****** Gananaj code start********");

function maleMarriageEligibility(gender, age, boyName) {
    if (gender == "Male" && age >= 21) {
        console.log("You are eligible");
    } else {
        console.log("Not Eligible");
    }
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Anil");

console.log("****** Gananaj code end ********");


// function stringCut() {
//     var open = `i_am_talking_about_our_future_idea's.:_5G_Broadbend`;
//     var stringLenth = open.length;
//     var stringNumber = stringLenth % 2 == 0 ?`we will get EVEN Number`:`we will get ODD Number`;
//     var SubString = open.substring(stringNumber);
//     return SubString;
//   }