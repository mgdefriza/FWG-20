// Task - 1 Requirments :
// - Jelaskan 10 Method built in javacsript.
// - Jenis method.
// - Bersifat mutasi/tidak.


// 1.  toUpperCase() :
// String "" method
// Does not change the original string.
let upper = "Hello world !";
let upperCase = upper.toUpperCase();

console.log(upperCase);


// 2. toLowerCase() :
// String "" method
// Does not change the original string.
let lower = "HELLO WORLD !";
let lowerCase = lower.toLowerCase();

console.log(lowerCase);


// 3. toString() :
// Array [] method
// Does not change the original array.
let names = ["Ican", "Mario", "Nico", "Guntur"];
let string = names.toString();

console.log(names);
console.log(string);


// 4. splice() :
// Array [] method.
// Overwrites the original array.
let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
let fruitsCopy = [...fruits];
fruitsCopy.splice(2, 3);

console.log(fruits);
console.log(fruitsCopy);

// 5. concat() :
// Array [] method.
// Does not change the existing arrays.
let boys1 = ["Ican", "Mario", "Nico", "Guntur"];
let boys2 = ["Hanan", "Imam"]
allBoys = boys1.concat(boys2)

console.log(allBoys);

// 6. flat() :
// Array [] method.
// Does not change the existing arrays.
let number = [[1,2], [3,4], [5,6]];
allNumber = number.flat();

console.log(allNumber);

// 7. trim() :
// String "" method.
// Does not change the existing string.
let text1 = "      Hello World!      ";
let text2 = text1.trim();

console.log(text2);

// 8. repeat() :
// String "" method.
// Does not change the existing string.
let text = "Hello world!";
let textRepeat = text.repeat(5);

console.log(textRepeat);

// 9. padStart() :
// String "" method.
// Does not change the existing string.
let pad1 = "1";
let padStart = pad1.padStart(5,"0");

console.log(padStart);

// 10. padEnd() :
// String "" method.
// Does not change the existing string.
let pad2 = "";
let padEnd = pad2.padEnd(5,"0");

console.log(padEnd);