const setOfNums = new Set();
setOfNums.add(2);
setOfNums.add(3);
setOfNums.add(8);
setOfNums.add(2);
setOfNums.add(9);
setOfNums.add(3);
console.log(setOfNums);

console.log(setOfNums.size);
setOfNums.delete(8);
console.log(setOfNums);

// setOfNums.clear();
console.log(setOfNums.values());



const array = [3, 4, 5, 6, 7, 2, 4, 5]
const setOfElements = new Set();
for (const element of array) {
    setOfElements.add(element);
    array
}
console.table(setOfElements);

const aarrayOfUniqueElements = [...new Set(array)];
console.log(aarrayOfUniqueElements);




for (const element of setOfNums) {
    console.log(element);
}

