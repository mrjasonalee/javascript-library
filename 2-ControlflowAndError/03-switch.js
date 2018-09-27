let friend;
switch (friend) {
    case 'Tom':
    console.log('Hey Tom, when are you rock climbing?');
    break;
    case 'Kenn':
    console.log('Hey Kenn, wanna play');
    break;
    case 'Carol':
    console.log('Hey Carol');
    break;
    default:
    console.log(`Sorry bro, ${friend}, but do I know you?`);
}

let dessert = 'pie'
switch (dessert) {
    case 'pie':
    console.log('Pie oh my')
    case 'cake':
    console.log('cake is great');
    break;
    case 'ice cream':
    console.log('ice cream you scream');
    default:
    console.log(`not on the menu`);
}

let yep = -8

switch (true){
    case (yep < 0 && yep > -10):
    console.log('worked here!');
    break;
    default:
    console.log('did not work');
}