const drink={}
drink.selection ??='Coffee!';
console.log(drink);

const beer={selection:null}
beer.selection ??='new defined';
console.log(beer);
//
// In this code, beer.selection is already defined with the value 'se'. When we use the ??= operator, it checks
// if beer.selection is null or undefined. Since it's not null or undefined, the assignment doesn't happen, and beer.selection remains 'se'.