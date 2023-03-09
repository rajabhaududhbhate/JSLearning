
let arrayOfNumbers = [ 0, 2, 4, 5, 8, 4, 0, 8 ];
console.log(arrayOfNumbers);
console.table(arrayOfNumbers);
const totalAaryElements = arrayOfNumbers.length;
console.log(`Total elements available in array is = ${totalAaryElements}`);

const is8Available = arrayOfNumbers.includes(8);
console.log(`IS 8 Available ${is8Available}`);

const is9Available = arrayOfNumbers.includes(9);
console.log(`IS 9 Available ${is9Available}`);

const indexOf8 = arrayOfNumbers.indexOf(8)
console.log(`Index of 8 Available:  ${indexOf8}`);

const indexOf100 = arrayOfNumbers.indexOf(100)
console.log(`Index of 100 Available:  ${indexOf100}`);


var arrayOfNumber = [10, 20, 25, 15, 30, 5];

const valueAtIndex2 = arrayOfNumber[2];
console.log(`value at index ----------------------2 is = ${valueAtIndex2}`);

arrayOfNumber[3] = 35;
console.log(arrayOfNumber);


arrayOfNumber[1] = 50;
console.log(arrayOfNumber);

arrayOfNumber.push(40);
console.log(`adding element in the last ${arrayOfNumber}`);

arrayOfNumber.unshift(5);
console.log(`adding element in the last ${arrayOfNumber}`);



var arrayOfNumber = [10, 20, 25, 15, 30, 5];
console.log(`Removing last element using pop() ===`);

arrayOfNumber.pop();
console.log(arrayOfNumber);
console.log(`Removing first element using shift() ===`);
arrayOfNumber.shift();
console.log(arrayOfNumber);



console.log(`slice===============`);
var arrayOfNumber = [10, 20, 25, 15, 30, 5, 40, 45];
const arrayFromIndex3 = arrayOfNumber.slice(3)
console.log(`Removed from removed ${arrayFromIndex3}`);




console.log(` ====== slice (startIndex, endIndex)`);
const subArray = arrayOfNumber.slice(2, 5);
console.log(subArray);


console.log(` ====== spliceMethod`);
var arrayOfNumber = [10, 20, 25, 15, 40, 45];

const splicedArray = arrayOfNumber.splice(3)
console.log(`removed element is : ${splicedArray}`);
console.log(`${arrayOfNumber}`);




var arrayOfNumber = [10, 20, 25, 15, 40, 45];
console.log(` ====== slice (startIndex, deleteCount) =====`);

const splicedArrayWithDeleteCount = arrayOfNumber.splice(2,2);

console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}`);

console.log(arrayOfNumber);


var arrayOfNumber = [10, 20, 25, 15, 40, 45];
const removeIndex= arrayOfNumber.splice(3,1);
console.log(`${removeIndex}`);


var arrayOfNumber = [10, 20, 25, 15, 40, 45];
const removeIndex2 = arrayOfNumber.splice(1,2);
console.log(`${removeIndex2}`);

console.log(`============= Splice() to insert===============`);
var arrayOfNumber = [10, 20, 25, 15, 40, 45];
//arrayOfNumber.splice(2, 0, 22);
console.log(arrayOfNumber);



console.log(`============= Splice() insert one elements without replace existing element===============`);
var arrayOfNumber = [10, 20, 25, 15, 40, 45];
arrayOfNumber.splice(4,0,5,35, 55);
console.log(arrayOfNumber);




console.log(`============= Splice() replace one elements ===============`);
var arrayOfNumber = [10, 20, 25, 15, 40, 45];
arrayOfNumber.splice(2,2 ,50, 60);
console.log(arrayOfNumber);



console.log(`============= Traversing ===============`);

var arrayOfNumber = [10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26];

for (let index = 0; index < arrayOfNumber.length; index++) {
    const element = arrayOfNumber[index];
    console.log(element);
    
}
// arrayOfNumber[index];






