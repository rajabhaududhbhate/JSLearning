// Assignment A: Write a normal funcation in such a way that it should accept one string value as argument
console.log("___Part A____");

function squareofWordLength(word){
    let wordLength= word.length
    return wordLength **2
}

console.log(`Number of character present in word "Javascript" is: ${"JavaScript".length} and its square is: ${squareofWordLength("JavaScript")}`);
console.log(`Number of character present in word "Google Chrome" is: ${"Google Chrome".length} and its square is: ${squareofWordLength("Google Chrome")}`);
console.log(`Number of character present in word "Developer Smart" is: ${"Developer Smart".length} and its square is: ${squareofWordLength("Developer Smart")}`);



console.log("___Part B____");

function strCalculation(){
    let statement = "I am Angular Developer"
    let lenStatement = statement.length
    let splitStatement = statement.split(" ")
    let wordCount = splitStatement.length

    console.log(`Length of given string => [${statement}] is: ${lenStatement}`);
    console.log(`number of words in given string is: ${wordCount}`);
    console.log(`Result for string length divide by word in string: ${lenStatement/wordCount}`);
    console.log(`Result for string length multiply by word in string: ${lenStatement*wordCount}`);
}
strCalculation()