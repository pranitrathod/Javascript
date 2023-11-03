
const ul=document.getElementById('2');
const ul2=document.querySelectorAll('input');
ul.addEventListener('click',e=>{
    console.log(e);
    e.target.closest('li').classList.toggle('highlist');
    // e.target.closest('li').classList.toggle('highlist');
})

// ul2.addEventListener('click',e=>{
//     console.log(e);
//     e.target.closest('li').classList.toggle('checks');
//     // e.target.closest('li').classList.toggle('highlist');
// })
// check.addEventListener('click',e=>{e.target})



ul2.forEach(e=>{
  console.log(e);
})

