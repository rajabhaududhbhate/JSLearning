
console.log(` `);

console.log(`Given array is ==> ["Banana", "Orange", "Apple", "Mango", "Water Melon"];`);
console.log(`01 => Log the first and last element on console]`);
const arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const valueOfAt0 = arraySeasonalFruits[0]
const valueOfAtLast = arraySeasonalFruits[arraySeasonalFruits.length-1];
console.log(`First element is :  ${valueOfAt0} ` );
console.log(`Last element is: ${valueOfAtLast}`);

console.log(` `);
console.log(`---------------------------------------------------------------------`);
console.log(` `);

console.log(`Given array is ==> ["Banana", "Orange", "Apple", "Mango", "Water Melon"];`);
console.log(`02 ==> Add element - Papaya before the element 'Banana' and then log array on console`);
const arrayFruit = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
 arrayFruit.unshift("Papaya");
console.log(`After adding Papaya this array is [${arrayFruit}];`);


console.log(` `);
console.log(`---------------------------------------------------------------------`);
console.log(` `);

console.log(`Given array is ==> ["Papaya", "Banana", "Orange", "Apple", "Mango", "Water Melon"];`);
console.log(`03 ==> Remove 'Mango' from the array`);
const arraySeanalFruit = ["Papaya", "Banana", "Orange", "Apple", "Mango", "Water Melon"];
arraySeanalFruit.splice(4, 1);
console.log(`Reomve "Mango" element from this array = [${arraySeanalFruit}];`);

console.log(` `);
console.log(`---------------------------------------------------------------------`);
console.log(` `);

console.log(`Given array is ==> ["Papaya", "Banana", "Orange", "Apple", "Water Melon"];`);
console.log(`04 ==> Add element or insert an element 'Pineapple at the last position`);
const addElement = ["Papaya", "Banana", "Orange", "Apple", "Water Melon"];
 addElement.push("Pineapple");
console.log(`Added "Pineapple" at the last position : [${addElement}];`);

console.log(` `);
console.log(`---------------------------------------------------------------------`);
console.log(` `);

console.log(`Given array is ==> ["Papaya", "Banana", "Orange", "Apple", "Water Melon", "Pineapple"];`);
console.log(`05 ==> Insert an element - 'Dragon Fruit' before "Water Melon"`);
const addInBetweenElement = ["Papaya", "Banana", "Orange", "Apple", "Water Melon", "Pineapple"];
addInBetweenElement.splice(4, 0, "Dragon Fruit");
console.log(`Added "Dragon Fruit" before "Water Melon" : [${addInBetweenElement}];`);

console.log(` `);
console.log(`---------------------------------------------------------------------`);
console.log(` `);

console.log(`Given array is ==> ["Papaya", "Banana", "Orange", "Apple", "Dragon Fruit", "Water Melon", "Pineapple"];`);
console.log(`06 ==> Replace an element "Orange" with "Kiwi"`);
const replaceInBetweenElement = ["Papaya", "Banana", "Orange", "Apple",  "Dragon Fruit", "Water Melon", "Pineapple"];
replaceInBetweenElement.splice(2, 1, "Kiwi");
console.log(`Replace "Orange" with "Kiwi"  : [${replaceInBetweenElement}];`);

console.log(` `);
console.log(`---------------------------------------------------------------------`);
console.log(` `);

console.log(`Given array is ==> ["Papaya", "Banana", "Kiwi", "Apple", "Dragon Fruit", "Water Melon", "Pineapple"];`);
console.log(`07 ==> Log the elements starting from index 1 to 5`);
const writeSelectedElement = ["Papaya", "Banana", "Kiwi", "Apple", "Dragon Fruit", "Water Melon", "Pineapple"];
const selectedElement = writeSelectedElement.slice(1, 6);
console.log(`Starting element from index 1 to 5 are  : [${selectedElement}];`);

console.log(` `);
console.log(`---------------------------------------------------------------------`);
console.log(` `);

console.log(`Given array is ==> ["Papaya", "Banana", "Kiwi", "Apple", "Dragon Fruit", "Water Melon", "Pineapple"];`);
console.log(`08 ==> Only select last 3 element and log on console: Use the length property`);
const fruitArray = ["Papaya", "Banana", "Kiwi", "Apple", "Dragon Fruit", "Water Melon", "Pineapple"];

console.log(`Last 3 elements are  : [${fruitArray[fruitArray.length-3]}, ${fruitArray[fruitArray.length-2]}, ${fruitArray[fruitArray.length-1]}]; `);

