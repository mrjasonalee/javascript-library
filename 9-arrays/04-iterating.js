//iterating
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

//food.forEach(f => {console.log(f)})

food.forEach((food, number) => {
    console.log(food);
    console.log(number);
})

//challenge
let list = ['Godfather', 'Scarface', 'Half Baked', 'The Mack'];

//console.log(list)
list.forEach((list) => {
    console.log(list);
})

list.push('South Park')


//newArray

let newArray = new Array(73);

console.log(newArray.length);
newArray.forEach(el => {
    console.log(el);
})

console.log(newArray);