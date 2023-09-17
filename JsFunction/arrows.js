// Let's re-write the below code in arrow function
// Arrow functions are more readable than traditional function in js
// the syntax of arrow function can be written as
// ()=>
//THAT'S ALL!!!!


//Arrow functions

const getComp= ()=>
{
    const randomValue=Math.random();
    if(randomValue<0.34) return ROCK;
    else if(randomValue<0.67) return PAPER;
    else return SCISSORS;
}

//Traditional functions
const getComputerChoice=function ()
{
    const randomValue=Math.random();
    if(randomValue<0.34) return ROCK;
    else if(randomValue<0.67) return PAPER;
    else return SCISSORS;
}

// **********************--------------------------******************************

//addition of two numbers

const add= (a,b)=> a+b;
add(1,3);

const print = ()=> alert("ARROOWWWW!!!!!!!!!!!!")





