/*
INTRO TO ARRAYS

have [] brackets
can hold multiple data type
great for listing
*/

//overiew/calling
let students = ['tony', 'marshal', 'reese', 'Ray', '23', true, ['Ryan', 'Iesha']]
//index values    0         1        2        3      4    5        6
console.log(typeof students); //object
console.log(students[2]); //reese
console.log(students[6]);


  let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

//for (let i = 0; i < food.length; i++){
  //  console.log(i)
//}

food.push('Pizza')

food.splice(1, 1, 'Bananas'); //adds item and takes away
console.log(food);
food.splice(2,0, 'sweet potato pie'); //adds item no takeaway
food.pop //remove last item
//for (let f of food){
  //  console.log(f)
//}