const form=document.querySelector('form');
form.addEventListener('submit',event=>{
    event.preventDefault();
    console.log(event);
});


//on this form submission you'll see that on clicking on submit we load the page bydefault
//to prevent such events we use preventDefault()
