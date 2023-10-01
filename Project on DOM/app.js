const model =document.getElementById('add-modal');
const buttons=model.lastElementChild;
const cancleBtn=buttons.firstElementChild;

// const addMovies=header.lastElementChild; this approch is not good for long run if any developer add new element,js will always select lastElement

const addMovies=document.querySelector('header button');
addMovies.addEventListener('click',()=>{
    model.style.display='block';
})
cancleBtn.addEventListener('click',()=>
{
    model.style.display='none';
})