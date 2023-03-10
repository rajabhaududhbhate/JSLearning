
let professor = {
    Name: "Raju",
    Department: "Development",
    age: "36",
    CollegeName: "SBH",
    id: 123456,
    degrees: {
        engineering: "CSC ", 
        PHD: "Adv Computing"
    },
    certificates: ["Hacker Rank Participation", "IFE course", "Certificate in Adv Programming"],

    
}

console.log(`========= Add minimum 5 Properties===========`);

console.log(professor);

console.log(`=========Nested Object Degrees===========`);
console.log(professor.degrees);

console.log(`=========Added One array "Certificate" ===========`);
console.log(professor.certificates);

console.log(`=========concat all degrees in step 2, ===========`);
console.log(professor.degrees.engineering +  professor.degrees.PHD);



console.log(`========= Added new property Total Experience  ===========`);
professor.totalExperience = "14 Years"
console.table(professor.totalExperience);
console.log(`========= Modify any existing property   ===========`);
professor.certificates.push("Oracle Certified");
console.table(professor.certificates);
console.log(`=========Log the last element of the array certificates.   ===========`);
console.log(professor.certificates[professor.certificates.length-1]);

// console.log(`=========Final Object in table   ===========`);
// console.table(professor);