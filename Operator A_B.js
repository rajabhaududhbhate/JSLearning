

function maleMarriageEligibility (gender, age, boyName){
 var result =  (gender=="Male") && (age>=21) ? `congratualtion ${boyName} are eligible for marriage` : `Hey boy "${boyName}" your are not eligible, for marriage`;
console.log(result);
}

maleMarriageEligibility("M-ale", 21, "Bilgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");
maleMarriageEligibility("Female", 25, "Jhon");




 
   