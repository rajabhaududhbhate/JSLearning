var greet = "Good Morning";

console.log(typeof greet);
 var greetlen = greet.length;
 console.log(greetlen);

 var charAtIndex3 = greet.charAt(8);

 console.log(charAtIndex3);

 var charAtLastindex = greet.charAt(greet.length-1);
 console.log(charAtLastindex);

 var indesOfM = greet.indexOf('M');
 console.log(indesOfM);

 console.log(greet.indexOf('n'));

 var replace1 = greet.replace("Morning", "Evening");
 console.log(greet);
 console.log(replace1);


 console.log(replace1.toUpperCase());
 console.log(greet.toLowerCase());

 var myName = "  Raju    Dudhbhate   ";
 console.log(myName.length);
 var myNametrime = myName.trim();
 console.log(myNametrime.length);
 var count = myName.length - myNametrime.length;
 console.log(count);

 console.log(myName.trimStart(), myName.trimEnd());


 console.log(greet.includes("Mor"));
 console.log(greet.includes("Afternoon"));

 var sliceResult = greet.slice(5, 12);
 console.log(sliceResult);

 console.log(greet.slice(2, 5));


 var greet = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
 var splitres = greet.split(",");
 console.log(splitres);

 console.log(`Total Words are ${splitres.length}`);



 