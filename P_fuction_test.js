var num1 = 100;
var num2 = 200;

var str1 = "Raju";
var str2 = "Renu"; 

function swap(value1, value2){
var tempnum = value1;
value1 = value2;
value2=tempnum;
    console.log(value1, value2);

}

swap(num1, num2);

swap(str1, str2);