const addProject = document.getElementById('addProject');
const newProj=document.getElementById('newProject');


function newProject(id,title,extra)
{
    const li=document.createElement('li');
    li.id=id;
    li.setAttribute('data-extra-info',extra);
    li.className='card';
    li.innerHTML=` <h2>${title}</h2>
          <p>Finish the course within the next two weeks.</p>
          <button class="alt">More Info</button>
          <button class="Finished">Finish</button>`;
    ul[0].append(li);
    newProj.style.display='none';
}
addProject.addEventListener('click', function () {
    const newProjDone=document.getElementById('done');
    if (newProj.style.display === 'block') {
        newProj.style.display = 'none';
    } else {
        newProj.style.display = 'block';
    }
    newProjDone.addEventListener('click',function ()
    {
        const newProjID=document.getElementById('newID').value;
       const clearID= document.getElementById('newID');
        const newProjTitle=document.getElementById('newTitle').value;
        const newProjExtraInfo=document.getElementById('newExtra').value;
        newProject(newProjID,newProjTitle,newProjExtraInfo);
    })
});


const moreInfo=document.querySelectorAll('.card button.alt');
moreInfo.forEach(function (button){
    button.addEventListener('click',function (){
        const extra=button.parentElement.getAttribute('data-extra-info');
       alert(extra);
    })
});
const finishButn=document.querySelectorAll('.card button.Finished');
const Ul=document.querySelectorAll('ul');
finishButn.forEach(function (button)
{
    button.addEventListener('click',function ()
        {
            const li=button.parentElement;
            console.log(li);
            button.innerHTML="Activate";
            button.className="Activate";
            Ul[1].append(li);
        }
    )
})

const activateButn=document.querySelectorAll(".card button.Activate");
const ul=document.querySelectorAll('ul');
activateButn.forEach(function (button)
{
    button.addEventListener('click',function ()
    {   const li=button.parentElement;
        button.innerHTML="Finish";
        button.className='finished';
        ul[0].append(li);
        console.log(ul[0]);
    })
})




