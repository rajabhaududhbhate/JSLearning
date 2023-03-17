
    var num1=0;
    var num2=1;
    var sum;
    var i=0;
    for (i = 0; i < 10; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
        console.log(num2);
    }