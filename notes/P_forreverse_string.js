var reversestr = function(givenStr){
    var reserve = ""
    for(let index= givenStr.length -1; index>=0; index--) {
        var charAt = givenStr.charAt(index);
        reserve = reserve + charAt;
    }
   return reserve;
}

const result = reversestr("Do it anyhow");
console.log(result);