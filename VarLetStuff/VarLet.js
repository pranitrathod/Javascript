var name="PRANIT";
var name="JHON";//it will work by not promting an error here! it is old js style been initially and its risky

let surname="DOE";
// let surname="DOE";//PROMPT an error here!

if(name=='JHON')
{
    var hobbies=['sports','reading','being dishonest','using instagram'];//This will work anywhere coz its VAR here
    // let hobbies=['sports','reading','being dishonest','using instagram']; This will never work coz its let and we know let dont allow outside the block/box
}


function greet()
{   var name="RATHOD";
    let surname="DOE";//it will not PROMPT an error here,becoz it local
    console.log(name,surname);
}
function arrayGreet()
{
    console.log(hobbies);
}

console.log(name);
greet();
arrayGreet();


//TO MAKE YOUR LIFE SIMPLE
// JUST REMEMBER

// VAR ONLY KNOWS GLOBAL AND FUNCTIONS
//LET AND CONST ARE SAME AS VAR BUT THE DIFFERENT IS THEY ARE LIMITED TO {}<- BRACETS only only only outside that its an error but VAR dont prompt such
//VAR WILL NEVER SHOW YOU ERROR BUT LET AND CONST WILL SHOW YOU AN ERROR!


//NOTE: VAR:VAR is a type in js were a variable can change without knowing a developer that there are some changes inside the code,VAR ONLY KNOW GLOBAL SCOPE AND FUCNTION SCOPE
//VAR is recommended not to use but LET
// LET: LET is a type in js were you see above that it will prompt you when some variable exist already and later declared somewhere else
// it is good for security



