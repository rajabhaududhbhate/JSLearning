console.log(`========== dateofSum by using for loop ================`);
let res = 0;
for (let index = 1; index <= 31; index++) {
     res = res + index;
}
    console.log(res);

    console.log(`========== dateofSum by using array with forEach ================`);
let arrayOfDate = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
console.log(arrayOfDate);

let dateofSum = 0;
arrayOfDate.forEach(element => {
    dateofSum = dateofSum + element;

});
console.log(dateofSum);

console.log(`========== dateofSum by using array with simple for loop ================`);
let totalcount = 0;
for (let index = 1; index <= arrayOfDate.length; index++) {
   
    totalcount = totalcount + index;
    
}
console.log(totalcount);


