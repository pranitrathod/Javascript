//function object


function startGame()
{
    console.log("Start's now!");
}



var greet={
    greeting:function ()
    {
        console.log("Into object function!");//this is how we use object function
    }
}

greet.greeting();
startGame();