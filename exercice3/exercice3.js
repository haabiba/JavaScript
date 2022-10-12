const statement=`The quote 'There is no exercise better for the heart than reaching down and lifting people up.
' by John Holmes teaches us to help one another.`

console.log(statement)


const quote=`Love is not patronizing and charity isn't about pity, 
it is about love. Charity and love are the same -- with charity you give
 love, so don't just give money but reach out your hand instead.`
console.log(quote)

let string = '10'
let int=10

console.log(typeof(string)==typeof(int))
let numInt = parseInt(string)
console.log(numInt) 
console.log(typeof(int)==typeof(numInt))

let p='9.8'
console.log(typeof(p==typeof(int)));
console.log(Math.round(parseFloat(p))) 


//Check if 'on' is found in both python and jargon
console.log("python".includes("on")) 
console.log("jargon".includes("on")) 

//I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("I hope this course is not full of jargon".includes("jargon")) 
//Generate a random number between 0 and 100 inclusively.

console.log(Math.round(Math.random()*100)+1)


const min1 = 50;
const max1 = 100;

// generating a random number
const a1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;

// display a random number
console.log(`Random value between ${min1} and ${max1} is ${a1}`);




const min = 0;
const max = 255;

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);


const string1 = "JavaScript";
const charactersLength = string1.length;

console.log(Math.random(string1));


console.log(string1.charAt(Math.floor(Math.random() * charactersLength)))
/*Use console.log() and escape characters to print the following pattern.
 1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/
console.log(`1 1 1 1 1 \n
    2 1 2 4 8 \n
    3 1 3 9 27 \n
    4 1 4 16 64 \n
    5 1 5 25 125`)

   /* Use substr to slice out the phrase because because because from the following 
    sentence:'You cannot end a sentence with because because because is a conjunction'*/
    const  p1='You cannot end a sentence with because because because is a conjunction'
    console.log(p1.substr(30,(8*3)+1))