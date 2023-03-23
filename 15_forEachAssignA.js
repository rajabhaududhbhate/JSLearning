const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log("===================Find the index of given array  =======================");
arrayNumbers.forEach(element =>{
   
    console.log(`Index  of number ${arrayNumbers.indexOf(element)} Element is: ${element}`);
})
console.log("===================Find the Positive nos from array  =======================");
arrayNumbers.forEach(element => {
    if(element >= 0){
        console.log(`The positive numbers ${element}`);
    }
});
console.log("===================Find the negetative nos from array  =======================");
 let negetativeNos = [];
arrayNumbers.forEach(element => {
   
    if(element < 0){
        negetativeNos.push(element)
    }
})
console.log("Tha negative values in the array", negetativeNos);


console.log("===================Find the evev nos from array  =======================");

arrayNumbers.forEach(element => {

    if(element % 2 ==0){
        console.log(element);
    }
})

console.log("===================Sum of all element from given array  =======================");
 let sum = 0;
arrayNumbers.forEach(element => {
      sum = sum + element;
   })
console.log(sum);


console.log("=================== Even indexed array values are  =======================");
 let eventindesValues = []; 
arrayNumbers.forEach(element => {
     
    if(arrayNumbers.indexOf(element)%2 ==0) {
        eventindesValues.push(element)
       

      }
   })
 console.log(eventindesValues);




