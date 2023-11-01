const butn=document.querySelector('button');
function msg()
{
    console.log('success!');
}
const trash=msg.bind(this);
butn.addEventListener('click',trash);
setTimeout(()=>{
    butn.removeEventListener('click',trash);
},5000);
