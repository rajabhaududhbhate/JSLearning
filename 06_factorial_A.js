function factorialOfNum(num){
    let factorial = 1;

    if (num === 0 ){
        console.log(`factorial for ${num} is not valid Please enter correct number `);
    }else if (num >=1){

        for (let index = num;  index >= 1; index--){

            factorial = factorial * index;
        }
        console.log(`Factorial of given number ${num} is ${factorial}`);

    }
    else {
        console.log(`${num} is not a valid number, Please enter correct number`);
    }

}



factorialOfNum(5);
factorialOfNum(3)
factorialOfNum(null)
factorialOfNum(8)
factorialOfNum(undefined);
factorialOfNum(NaN);
factorialOfNum(9)
factorialOfNum(0)
