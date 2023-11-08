const li=document.querySelectorAll('li');

// li.forEach(e=>{
//     e.addEventListener('click',event=>{
//         event.target.classList.toggle('high');
//         console.log('clicked');
//     })
// })

//This above is old school style of writing
//Introducing Delegation method

const ul=document.querySelector('ul');

ul.addEventListener('click',e=>{
    // e.target.classList.toggle('high');
    e.target.closest('h1').classList.toggle('high');
    //by using closest we choose the nearest
})