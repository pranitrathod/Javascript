const model =document.getElementById('add-modal');
const buttons=model.lastElementChild;
const cancleMoviesBtn=buttons.firstElementChild;
const addMoviesBtn=cancleMoviesBtn.nextElementSibling;
const userInputs=document.querySelectorAll('input');


// const addMovies=header.lastElementChild; this approch is not good for long run if any developer add new element,js will always select lastElement

const addMovies=document.querySelector('header button');
addMovies.addEventListener('click',()=>{
    model.classList.toggle('visible');
})
cancleMoviesBtn.addEventListener('click',()=>{
    model.classList.toggle('visible');
})

addMoviesBtn.addEventListener('click',()=>{
    const titleValue=userInputs[0].value;
    const imageValue=userInputs[1].value;
    const ratingValue=userInputs[2].value;

    if(titleValue.trim() ==='' || imageValue.trim()==='' || ratingValue <1 || ratingValue>5)
    {
        alert('FUCK YOU ENTER VALID THINGS MOTHERFUCKER!!!!!!!!!!!!!!!!!!1');
    }

})
