/*
END LOOPS

GREAT FOR ITERATING OVER VALUES IN AN OBJECT
*/

let student = {name: 'Christian', awesome: true, degrees: 'Javascript', week: 1};

for (let item in student) {
    console.log(item);
    console.log(student[item]);
}
////
let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon'];

for (cat in catArray){
    console.log(catArray[cat]);
}


/*
challenge
*/
//

let studentName = 'jason';
let capName =' ';

for (let ch in studentName){}
    if (ch == 0 ){
        capName = studentName[ch].toUpperCase();
        capName = capName + studentName[ch].toLowerCase();
    {}
console.log(capName);
}
console.log(capName);


  
