/*
COMPARISON OPERTAORS
*/

//equality
console.log('3' == 3); //true
console.log('three' == 3); //false
console.log(0 == false);
//strict equality //checks value and type
console.log(3 === 3)
console.log(3 === '3');

//Not Equal
console.log('4' !=4); //doesn't care about type -> False

//Strict Not Equal
console.log('3' !== 3); // checks type and value

//greater than
console.log(3 > 2);

//less than
console.log(2 < 3);

//greater than equal to
console.log(3 >= 3);

//less than or equal to
console.log(4 <= 4);

// And: returns true if let and right are both true
console.log(true && true); //output true
let x = 5;
console.log(x > 10 && x > -5);

//tangent
let str = 'a'
console.log(str < 'p')

//Or: return true if left or right are true
let x = 5
console.log(true || false); //true
console.log(x < 10 || x > 15); //true