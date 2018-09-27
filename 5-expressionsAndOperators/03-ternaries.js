// Ternaries

var x = 6;
x > 0 ? console.log("x is greater than 0.") : console.log("x is not greater than 0.")

if (x > 0) {
    console.log("greater")
} else {
    console.log("lesser")
}

(x == 0) ? console.log("x equals 0") : (x < 0) ? console.log("x is less than zero") : console.log("x is greater than 0")

var x = 38;
(x = 0) ? console.log("you are alive") : (x > 21) ? console.log("you are getting old") : (x > 25) ? console.log("you are getting really old") : console.log("You are getting old")


let yep = -8;
(yep < 0 && yep > -10) ? console.log("yep is between 0 and -10") : (yep > 0) ?
console.log("yep is greater than 0") : console.log("yep is greater than 0");

let tacocat = ("Is it a palindorme?!?!?");

function whatAmI(tacocat){
  if(tacocat === tacocat.split('').reverse().join('')){
    return true;}
    else{
      return false;
    }
}

if(whatAmI == tacocat){
  console.log("YEAAAAAHHHHHHHH ISSA PALINDROME");
}

if(whatAmI !== tacocat){
  console.log("NO BUENO TRY AGAIN FOOL");
}
{

whatAmI(tacocat)
}
var PALINDROME = prompt("Is it a Palindrome?")
let tacocat = "PALINDROME";

if(whatAmI == tacocat){
  console.log("YEAAAAAHHHHHHHH ISSA PALINDROME") ;
}
if(whatAmI !== tacocat){
  console.log('NAHHHHH');
}
{
function whatAmI(tacocat){
 if(tacocat = tacocat.split('').reverse('')){
   return true;}
   else{
     return false;}
}
}
var palindrome = prompt("Is it a Palindrome?")
let tacocat = "PALINDROME";

if(whatAmI == tacocat){
  console.log("YEAAAAAHHHHHHHH ISSA PALINDROME") ;
}
if(whatAmI !== tacocat){
  console.log('NAHHHHH');
}
{function whatAmI(tacocat){
 if(tacocat = tacocat.split('').reverse('')){
   return true;}
   else{
     return false;}
}
}

  
var palindrome = prompt("Is it a Palindrome?");


function whatAmI(palindrome){
  if(palindrome === palindrome.split('').reverse().join('')){
    return true;}
    else{
      return false;
    
  }
}
if(whatAmI === palindrome{
  alert("Yes " + palindrome + " Good Job");}

if(whatAmI !== palindrome{
  alert("No " + palindrome + " Try Again");
  
  whatAmI(palindrome);
