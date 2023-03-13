function isPrime(num){
for (let index = 2; index < num.length; index++) {
   if(num% index == 0){
    return false;
   }
    
}
return true;

}
let result = isPrime(7);
isPrime(6);
res = result ? "Yes" : "No"

console.log( `Is 7 prime Number : ${res} `);

console.log( `Is 7 prime Number : ${isPrime(7) ? "Yes" : "No"}  `);
console.log( `Is 7 prime Number : ${isPrime(6) ? "Yes" : "No"}  `);