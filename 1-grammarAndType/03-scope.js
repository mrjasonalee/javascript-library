/*
SCOPE

Javascript has both local a nd global scope
*/

var x = 12;
function scope() {
    var x = 33;
    console.log(x);
}
scope(); //output  ->33
console.log(x); //output -> 12

//
var x = 12

function scope() {
    x =33;
    console.log(x)
}
scope(); //output -> 33 for each
console.log(x);

//the two examples above are diff bcs the firt example had 2 var named x
//name 'x' in the global scope

var x = 12;

function scope() {
    var x =33;
    if (true) {
    var x = 45;
    console.log(x);
    }
}
console.log(x);

function constTest() {
    const scope =1;
    if (true)  {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}
constTest()