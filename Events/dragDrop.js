const ul1 = document.getElementById("ul-1");
const ul2 = document.getElementById("ul-2");
const doneButton = document.querySelector("button");
const liArray = document.querySelectorAll("li");
doneButton.addEventListener('click', () => {
    const itemArr=[];
    const input = document.querySelector('input').value;
    const liItem = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "Add";
    liItem.innerHTML = `<label>${input}</label><button>Done</button>`;
    ul1.append(liItem);
    // Add the new li element to the liArray.
    const liArrayAsArray = Array.from(liArray);
    liArrayAsArray.push(liItem);
    localStorage.setItem('userData',input);
    liItem.addEventListener('click',()=>{add(liItem);});
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
    item.addEventListener('click',()=>{
        const butn=item.querySelector('button');
        if(butn.textContent==='Add')
        {console.log(item);
        add(item);}
        else
            done(item);
    });
});