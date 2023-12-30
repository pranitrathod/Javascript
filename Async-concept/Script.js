const but=document.querySelector("button");
console.log(but);
async function getLocation()
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
// async function a(){}
// const getAnswer= (()=>{
//     return new Promise((resolve,reject)=>{
//         try{
//             resolve(getLocation());
//         }
//         catch(error){
//             reject(error);}
//     })
// })
// async function getPromise(){ const ans=await getAnswer();
//     console.log("learning async");
// console.log(ans);}
// getPromise();


async function setTimer(number)
{
    return new Promise((resolve,reject)=>{
        console.log("downloading!!!!!");
       setTimeout(()=>{

           setTimeout(()=>{resolve(getLocation())},1);
           }
           ,number);
})
}
const ans=setTimer(100);

// setTimer(1000).then((result)=>console.log(result));
// const getPromises=getAnswer().then((result)=>{return result});
// console.log(getPromises);

    // .then(result=>{console.log(result)})
    // .catch(error=>{console.log(error)});

