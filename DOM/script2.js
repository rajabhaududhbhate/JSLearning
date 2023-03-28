//const Elementh2 = document.getElementsByTagName("h2");

// Elementh2[0].innerHTML = "My Hobbies";
// console.log(Elementh2);

const heading2 = document.getElementById("heading2");
heading2.style.color = "red";

const ullist = document.getElementById("ullist");
const childNum = document.getElementById("chilNode");
ullist.removeChild(childNum);
