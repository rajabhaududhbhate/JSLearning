var java = "JavaScript";
var gChrome = "Google Chrome";
var devSmart = "Developer Smart";

function squareOfWordLenght(value1){
    console.log(`The Given string is : ${value1}`); 
    console.log(`The length of word is ${value1} : ${value1.length}`); 
    console.log(`The square of the string is : ${value1.length ** 2}`);
    console.log(`**********************************************************************`);
}

squareOfWordLenght(java);
squareOfWordLenght(gChrome);
squareOfWordLenght(devSmart);

function angularD(){
    var angu = "I am Angular Developer";
    return angu;
}
var angularDev = angularD();
var strLength = angularDev.length;
console.log(`The give string is "I am Angular Developer" and its lenght is: ${angularDev.length}`);
var strWord = angularDev.split(" ");
var strDivision = strLength / strWord.length;
var strMultiplication = strLength * strWord.length;
console.log(`The Result of string lenght divide by total number words is : ${strDivision}`);
console.log(`The Result of string lenght multiplication by total number words is : ${strMultiplication}`);
