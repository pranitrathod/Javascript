const ul1 = document.getElementById("ul-1");
const ul2 = document.getElementById("ul-2");
const doneButton = document.querySelector("button");
const liArray = document.querySelectorAll("li");
const itemArray=[];


doneButton.addEventListener('click', () => {
    const input = document.querySelector('input').value;
    const liItem = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "Add";
    liItem.draggable=true;
    liItem.innerHTML = `<label>${input}</label><button>Done</button>`;
    ul1.append(liItem);
    const butn=liItem.querySelector('button');
    butn.addEventListener('click',()=>{
        add(liItem);
    });
});

function add(item)
{
    const butn=item.querySelector('button');
    if(butn.textContent==='Add'){
    butn.textContent = "Done";
    ul1.appendChild(item);
    return;
    }
    else{
        done(item);
}
}
function done(item)
{
    const butn=item.querySelector('button')
    if(butn.textContent==='Done') {
        butn.textContent = "Add";
        ul2.appendChild(item);
        return;
    }
    else
    {add(item);}
}
liArray.forEach(item=>{
    item.draggable="true";
    item.addEventListener('click',()=>{
        const butn=item.querySelector('button');
        if(butn.textContent==='Add')
        {console.log(item);
        add(item);}
        else
            done(item);
    });
});


