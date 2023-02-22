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
    var strLength = angu.length;
    var splitStatement = angu.split(" ");
var wordCount = splitStatement.length;
console.log(`The give string is "I am Angular Developer" and its lenght is: ${strLength}`);
console.log(`The give string is "I am Angular Developer" and its lenght is: ${wordCount}`);
console.log(`The Result of string lenght divide by total number words is : ${strLength/wordCount}`);
console.log(`The Result of string lenght multiplication by total number words is : ${strLength*wordCount}`);
}

angularD()
 






 