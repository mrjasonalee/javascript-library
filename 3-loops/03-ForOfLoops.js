/*
for of loops
*/


let student = {name: 'Emmily', awesome: true, degree: 'JavaScript', week : 1};
for (let key of student) {
    console.log(key);
}

///

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon'];

for (cat of catArray){
    console.log(cat, 'says meow');
}
 