
function maleMarriageEligibility(gender, age, boyName){
    if(gender=="Male" && age>=21){
       var str = `Hey ${boyName} you are eligible for marraige`;
       return str;
    }else{

        var str = `Hey ${boyName} you are not eligible for marraige`;
        return str;
    }

 }

 var result = maleMarriageEligibility ("Male", 25, "Billgates");
 console.log(result);
//  maleMarriageEligibility ("Male", 20, "Anil");


function maleMarriageEligibility(gender,age, boyName){
    if (gender=="Male" && age>=21) {
       var str = `Hey ${boyName} you are eligible for marriage`;
       return str;
    } else {
        var str = `${boyName} you are not eligible for marriage`;
        return str;
    }

}
var result = maleMarriageEligibility("Male", 25, "Billgates");
console.log(result);


function maleMarriageEligibility(gender,age, boyName){
    if (age <0 ) {
        return `Hey ${boyName} your age ${age} is not valid`;
    }

    

    if (gender=="Male" && age>=21) {
       var str = `Hey ${boyName} you are eligible for marriage`;
       return str;
    } else {
        var str = `${boyName} you are not eligible for marriage`;
        return str;
    }

}
var result = maleMarriageEligibility("Male", 21, "Billgates");
console.log(result);





