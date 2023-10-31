const btn=document.querySelector('button');
function msg(e)
{   console.log(e);
    alert('DONE!',e);
}
const msg1=msg.bind(this);
btn.addEventListener('click',msg1);
setTimeout(()=>{
    btn.removeEventListener('click',msg1);
    console.log('over!');
    },5000);

