
// var num1=0;
// var num2=1;
// var sum;
// var i=0;
// for (i = 0; i < 10; i++) 
// {
//     sum=num1+num2;
//     num1=num2;
//     num2=sum;
//     console.log(num2);
// }




function fabo(num) {
    let first = 0;
    let second = 1;
    let next;

    for (let index = 1; index <= num; index++) {


        next = first + second;
        first = second;
        second = next;
        console.log(second);


    }
    // return second;
}

const result = fabo(15);

