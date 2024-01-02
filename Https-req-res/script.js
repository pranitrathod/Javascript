const postList=document.querySelector(".posts");
const postDesc=document.getElementById("desc");

const xhr=new XMLHttpRequest();
function sendHTTP(method,url){

    const promise=new Promise((resolve,reject)=>{
        xhr.open(method,url);
        xhr.onload=function(){
            const gotData=JSON.parse(xhr.response);
            resolve(gotData);

        }
        xhr.send();
    });
    return promise;
}

 async function fetchData(){
 const gotData=await sendHTTP('GET',"https://jsonplaceholder.typicode.com/posts");
     for (let post of gotData) {
         const postTemp = document.importNode(postDesc.content, true);
         postTemp.querySelector("h2").textContent = post.title;
         postTemp.querySelector("p").textContent = post.body;
         postList.append(postTemp);
     };

}
fetchData();