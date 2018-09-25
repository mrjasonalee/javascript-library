/*
TYPES
*/

//Booleans
let on = true;
console.log(on);

let off = false;
console.log(off); //output-> false

//boolean can represent: true/false, on/off, yes/no

//Null
/*
Null = empty value(not 0; not undefined)

it is like an empty container; nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

//Undefined 
let undef = undefined;
console.log(undef);


//Number
let degrees = 65;
console.log(65);

let precise = 999999999999999
console.log(precise);


let rounded = 9999999999999999
console.log(rounded);

let notquite = 0.2 + 0.1;
console.log(notquite);

let anothernumber = 0.2 + 0.1;
console.log(anothernumber);

let num = 0.3;
console.log(num);
//////////////////(2 + 1 )/10
let numbersarehard = (0.2 * 10 + 0.1 * 10) /10;
console.log(numbersarehard);


//Strings
//strings = any value within quotes; JS spit out the value within the quotes
let stringone = "double quotes";
let stringtwo = 'single quotes';
console.log(stringone, stringtwo);

//numbers vs strings

let third = 1050 + '100';
console.log(third);

//CHALLENGE
let FirstName = "Jason";

console.log(FirstName);

let lastname = "Lee";

console.log(lastname);

let HouseNumber = "8330 Pine Branch"

console.log(HouseNumber);

let City = 'Indianapolis';

console.log(City);

let state = 'Indiana';

console.log(state)

let zip = '46234';

console.log(zip);

//Objects
/*
What is an object

A container that hold multiple datatypes

denoted by {}
has keys and values: 'blue' (value), separated with a colon
Each key is separated by a comma
*/

let burritos = {
    size: 'large',
    quantity: 4,
    now: true
}

console.log(burritos);

console.log(typeof burritos);

////Arrays
/*
Arrays are great for lists

Denoted by []
Have value separated by commas -> ['blue', 'green', 'yellow']
*/

let burritos = ['large', 4, true];

console.log(burritos);
console.log(typeof burritos);