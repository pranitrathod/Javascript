//IMPORTANT NOTES ON EVENTS:
//on this form submission you'll see that on clicking on submit we load the page bydefault
//to prevent such events we use preventDefault()

const form=document.querySelector('form');
form.addEventListener('submit',event=>{
    event.preventDefault();//which stop the page to preventDefault
    console.log(event);
});

const div=document.querySelector('div');
const button=document.getElementById('butn');
const body=document.querySelector('body');
const html=document.querySelector('html');

div.addEventListener('mouseenter',event=>{
    
    console.log("Div executed");
});

button.addEventListener('mouseenter',event=>{
    console.log(event);
    console.log("button executed");
})

//This by default BUBBLING delegation from inside to outside event triggering
//To make it CAPTURING we simply add true to the addEvents
//There's also a function to stop the propagation by using stopPropagation
//Also have immediateStopPropagation as well

//Also note not all have bubble-true delegation we need to check if its false or true but console.log(event)
//eg:mouseenter doesn't have allow bubbling







