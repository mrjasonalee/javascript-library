/*
VARIABLES

Notes on Variables
1)Variable must begin with a letter, underscore, or dollar sign
2) You can use number bu they must follow one of the above
3) Javascript is case sensitive-'hello" and 'Hello" are different

*/

var a=1;
var b= 2;
console.log(a+b);

/*
DECLARATIONS

Declarations are the LEFT SIDE of a variable
| It is simply the var x
| It is on the left side of the assignment operator (=)

Initializations are the RIGHT SIDE of a variable
| Set the value of the variable
| includes the variable name (x), the assignment operator (=), and the value (10) => x + 10
*/

var x;
console.log('Declarations', x);

x = 10;
console.log('Initializations 1:', x);

x = 33;
console.log('Initializations 2:', x);

/*
Var, Let, and Const:
var = 'old js keyword for variables
let = 'new'; keyword for variables (introduced in ES6)
const = also 'new'; declares unchangeable variables
*/

let today = 'Great';
const elevenfifty = 'Wonderful';
console.log(today, elevenfifty);

today = 'Lovely';
console.log(today, elevenfifty);

let cup = 'water';
cup = 'coffee';
