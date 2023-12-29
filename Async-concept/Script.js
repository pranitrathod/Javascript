const but=document.querySelector("button");
console.log(but);
function getLocation()
{
    navigator.geolocation.getCurrentPosition(
        position => {console.log(position)},
          error=>{console.log(error);})

    //This above part is taken cared by browser
    //And when the below code is vanished or executed from the stack ,message queue will put the above code to the stack by
     //event loop concept-->This is async-functions!
    //and here navigator is browser API

    console.log("I ran faster then you,Congratulations you learned Async-concept!");
}

but.addEventListener('click',getLocation);


//Convert this code into promises

function something(){
    return 20;
}


const getAnswer=(()=>{
    return new Promise((resolve,reject)=>{
        try{
            resolve(getLocation());
        }
        catch(error){
            reject(error);}
    })
})

const getPromise=getAnswer().then(result=>{console.log(result)}).catch(error=>{console.log(error)});



