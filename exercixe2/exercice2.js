let  namedChallenge='Zone4Code JavaScript'
console.log(namedChallenge)
console.log(typeof(namedChallenge))
console.log(namedChallenge.length)
console.log(namedChallenge.toLocaleUpperCase())
console.log(namedChallenge.toLowerCase())
console.log(namedChallenge.substr(0, 9));
console.log(namedChallenge.substring(9,22));
console.log(namedChallenge.slice(0,9));
let result = namedChallenge.includes("Scrip");
console.log(result);
const myArray = namedChallenge.split(" ");
let word = myArray[1];
console.log(myArray);
console.log(word);
let s = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
const s1 = s.split(", ")
console.log(s1);
const namedChallengef = namedChallenge.replace("JavaScript", "Python");
console.log(namedChallengef)
const index = 5;

console.log(`The character at index ${index} is ${namedChallenge.charAt(index)}`);
console.log(`The character code ${namedChallenge.charCodeAt(index)} is equal to ${namedChallenge.charAt(index)}`);


const searchTerm = 'Zone4Code';
const indexOfFirst = namedChallenge.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);

console.log(`The index of the 2nd "${searchTerm}" is ${namedChallenge.indexOf(searchTerm, (indexOfFirst ))}`);

console.log(`The index of the first "${searchTerm}" from the end is ${namedChallenge.lastIndexOf(searchTerm)}`);

const paragraph ='You cannot end a sentence with because because because is a conjunction'
const mot="because"
const indexOfFirst1 = paragraph.indexOf(mot);
console.log(indexOfFirst1)
console.log(`The index of the 2nd "${mot}" is ${paragraph.indexOf(mot, (indexOfFirst ))}`);
console.log(`The index of the first "${mot}" from the end is ${paragraph.lastIndexOf(mot)}`);
let stringZ= '     Zone4Code JavaScript   '

console.log(stringZ.trim());
console.log(namedChallenge.startsWith('Zone4Code'));
console.log(namedChallenge.endsWith('JavaScript'));
console.log(namedChallenge.match(/a/g));
const v1 ="Zone4Code ";
const v2 = "JavaScript";
const v3 = v1.concat(v2);

console.log(v3);


console.log(`: ${namedChallenge.repeat(2)}`);








