const postList=document.querySelector(".posts");
const postDesc=document.getElementById("desc");
const addButn=document.getElementById("add-btn");

async function sendHTTP(method,url,data){
    // const promise=new Promise((resolve,reject)=>{
    //     const xhr=new XMLHttpRequest();
    //     xhr.open(method,url);
    //     xhr.onload=function(){
    //         const gotData=JSON.parse(xhr.response);
    //         resolve(gotData);
    //     }
    //     xhr.send(JSON.stringify(data));
    // });
    // return promise;
    const res=await fetch(url);
    const dataa=await res.json();
    return dataa;
}
async function fetchData() {
    const gotData = await sendHTTP('GET', "https://jsonplaceholder.typicode.com/posts");
    for(let post of gotData){
    const postTemp = document.importNode(postDesc.content, true);
    postTemp.querySelector("h2").textContent = post.title;
    postTemp.querySelector("p").textContent = post.body;
    postTemp.querySelector("button").id=post.id;
    postList.append(postTemp);
}}
function postThis(event)
{
    event.preventDefault();
    const userID=Math.random();
    const title=document.getElementById("title").value;
    const content=document.getElementById("content").value;
    const data={
        title:title,
        body:content,
        userId:userID
    }
    createResouce("POST","https://jsonplaceholder.typicode.com/posts",data);
}postList.addEventListener("click",event=>{
    if(event.target.tagName==="BUTTON")
    {   const liID=event.target.closest('li');
        const buttonID=event.target.id;
        sendHTTP('DELETE',`https://jsonplaceholder.typicode.com/posts/${buttonID}`);
        console.log(buttonID);
        if(liID){
            liID.remove();
        }}
});
addButn.addEventListener("click",postThis);
fetchData();