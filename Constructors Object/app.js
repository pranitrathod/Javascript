//Earlier in OOP we used to do this way
//1.

class Person
{
    constructor() {
        this.name='Pranit Rathod';
        this.age=23;
    }
    greet()
    {
        console.log(`This is ${this.name} and his age is ${this.age}`);
    }
}
new Person().greet();

//2. But we have another way to replicate the constructor using functions

function person()
{

   this.name='Pranit Rathod';
    this.age=23;
  this.greet=function ()
    {
        console.log(`Without using OOP style constructor we get same O/P \n This is ${this.name} and his age is ${this.age}`)};
}


// person.prototype={
//     printAge()
//     {console.log(`Age is ${this.age}`);}
// }
//
//
//
//
// //using arrow function just for practise
// person.prototype={
//     printName(){console.log(`Age is ${this.name}`);}
// }

    person.prototype={
    printName()
{
    console.log(`Your Name,${this.name}`);
}
    }
per=new person();
per.greet();
per.printName();
console.dir(per);


