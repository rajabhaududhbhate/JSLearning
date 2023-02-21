
console.log("********** Assignment 1 **********     ");
function stringBasic(){
    console.log("My dream company name Google")
}
stringBasic();
var hobby1 = "Driving";
var hobby2 = "Business Analysis"
var hobby3 = "Listen Music"
console.log("My hobbies are :", hobby1 +",", hobby2+",", hobby3+".");
var hobby1CharCount = hobby1.length;
hobby2CharCount = hobby1.length;
hobby3CharCount = hobby1.length;
console.log("Total number of characters are", hobby1CharCount + hobby2CharCount + hobby3CharCount);
console.log("********** Assignment 2 **********");
function stringHandsOn(){
    var str = "     Hey you are doing good, keep it up     ";
    return str;
}
var resultstringHandsOn = stringHandsOn();
console.log(resultstringHandsOn);
var strLenght = resultstringHandsOn.length;
console.log("Total lenght of string is:", strLenght);
var stringHandsOnTrim = resultstringHandsOn.trim();
console.log("Removing extra start and end spaces by using trim :", stringHandsOnTrim+".", "String Lenght is: ", stringHandsOnTrim.length);
console.log("Total number extra spaces count", resultstringHandsOn.length - stringHandsOnTrim.length);
console.log(stringHandsOnTrim.charAt(0), stringHandsOnTrim.charAt(stringHandsOnTrim.length-1) );
var totalWordStr = stringHandsOnTrim.split(" ");
console.log("Total number of words are", totalWordStr);
console.log("index of word good is:", stringHandsOnTrim.indexOf('good'));
var substring = stringHandsOnTrim.slice(22, stringHandsOnTrim.length );
console.log("substring starting from index 22 :", substring);

