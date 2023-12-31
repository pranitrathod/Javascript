const xhr=new XMLHttpRequest();
xhr.open('GET',"https://jsonplaceholder.typicode.com/posts");

xhr.onload=function(){
    const gotData=JSON.parse(xhr.response);
    console.log(gotData);
}
xhr.send();
