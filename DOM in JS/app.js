// innerHTML()- to render/add new element to the whole document,brand new use innerhtml
// insertAdjecentHTML- to render/add only indented element to the whole document use inserAdjecentHTML

const ul=document.querySelector('ul');
console.log(ul);


ul.innerHTML=ul.innerHTML +'<li>item 4</li>'//this all are brand new element

ul.insertAdjacentHTML('beforeend','<li>item 4</li>'); //This is only add element which we want rather then adding all new element





