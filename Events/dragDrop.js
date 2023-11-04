const ul1 = document.getElementById("ul-1");
const ul2 = document.getElementById("ul-2");
const doneButton = document.querySelector("button");
const liArray = document.querySelectorAll("li");
const itemArray=[];getAllLocalStorageItems();

doneButton.addEventListener('click', () => {
    const input = document.querySelector('input').value;
    const liItem = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "Add";
    liItem.innerHTML = `<label>${input}</label><button>Done</button>`;
    ul1.append(liItem);
    // Add the new li element to the liArray.
    const liArrayAsArray = Array.from(liArray);
    liArrayAsArray.push(liItem);
    localStorage.setItem('data',liItem);
    liItem.addEventListener('click',()=>{add(liItem);});

});
window.addEventListener('load',function (){
    const savedData = localStorage.getItem("data");
    const liItem = document.createElement("li");
    liItem.innerHTML=`<li>${savedData}</li>`
    ul1.append(liItem);
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


function getAllLocalStorageItems() {

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        itemArray[key] = value;
    }
    console.log(itemArray);
}