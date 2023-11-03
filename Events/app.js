
const ul=document.getElementById('2');

ul.addEventListener('click',e=>{
    // console.log(e);
    e.target.closest('li').classList.toggle('highlist');
    // e.target.closest('li').classList.toggle('highlist');
})
const ul2=document.getElementById('1');
ul2.addEventListener('click',e=>{
    console.log(e.target.closest('ul'));
    e.target.closest('label').classList.toggle('checks');
    // e.target.closest('li').classList.toggle('highlist');
})



//Every good example why does input doesn't directly work
// we have to wrap into some element individually because ul2 doesnt know which input it trigger
//we have to put inside the structure element such as label or li
//then it will understand its l1-1 input or l1-2 input so on and so forth

//It does work like this div->ul->li thats all for only list or other kinds of stuff
//It doesnt work for input we have to add a label or other element to get that into actions




