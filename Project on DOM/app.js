const model =document.getElementById('add-modal');
const buttons=model.lastElementChild;
const cancleMoviesBtn=buttons.firstElementChild;
const addMoviesBtn=cancleMoviesBtn.nextElementSibling;
const userInputs=document.querySelectorAll('input');
const moviesDetials=document.getElementById('moviesDetials');

// const addMovies=header.lastElementChild; this approch is not good for long run if any developer add new element,js will always select lastElement

const addMovies=document.querySelector('header button');

const defaulCard=document.getElementById('entry-text');

const main=document.querySelector('main');


addMovies.addEventListener('click',()=>{
    model.classList.toggle('visible');
})
cancleMoviesBtn.addEventListener('click',()=>{
    model.classList.toggle('visible');
    for (const userInputsClear of userInputs) {
        userInputsClear.value='';
    }
    moviesDetials.value='';
})

const deleteMovie=(id)=>{
        let counter=0;
    for (const movieId of moviesArrays ) {
        if(movieId===id)
        {
            break;
        }
        counter++;
    }
    moviesArrays.splice(id,1);
    const ul=document.getElementById('movie-list');
    ul.children[counter].remove();

    // if (moviesArrays.length===0)
    // {
    //     defaulCard.style.display='block';
    // }
}
const moviesArrays=[];
addMoviesBtn.addEventListener('click',()=>{

    const titleValue=userInputs[0].value;
    const imageValue=userInputs[1].value;
    const ratingValue=userInputs[2].value;
    const addMoviesObject={
        id:Math.random().toString(),
        title:titleValue,
        details:moviesDetials.value,
        image:imageValue,
        rating:ratingValue
    };
    moviesArrays.push(addMoviesObject);
    if(titleValue.trim() ==='' || imageValue.trim()==='' || ratingValue <1 || ratingValue>5)
    {
        alert('PLEASE ENTER VALID VALUES!!');
    }
    else
    {
       // addMovies.push(titleValue);
       // addMovies.push(imageValue);
       // addMovies.push(ratingValue);
            if(moviesArrays.length==0){
        defaulCard.style.display='block';}else{defaulCard.style.display='none'};

       const renderMoviesOnScreen=document.createElement('li');
        renderMoviesOnScreen.classList='movie-element';
        renderMoviesOnScreen.id=addMoviesObject.id;
       renderMoviesOnScreen.innerHTML=`
            <div class="movie-element__image">
            <img src="${imageValue}" alt="${titleValue}">
            </div>
            <div class="movie-element__info">
            <h2>${titleValue.toUpperCase()}</h2>
            <h6>${moviesDetials.value}</h6>
            <p>${ratingValue}/5 stars</p>
            </div>`;
            const ul=document.getElementById('movie-list');
            ul.appendChild(renderMoviesOnScreen);
        model.classList.toggle('visible');
        console.log(addMovies);
        for (const userInputsClear of userInputs) {
            userInputsClear.value='';
        }moviesDetials.value='';
        renderMoviesOnScreen.addEventListener('click',deleteMovie.bind(null,addMoviesObject.id));
    }
})





