
const butn=document.getElementById("butn");
const body=document.querySelector('body');
butn.addEventListener('click',run);
function run(){
    function cars(string,carName,carPrice){
        var stringChanged="";
        if(carPrice>1400000){
            stringChanged="You got a discount of 15%";
        }else{
            stringChanged="No discount at this moment!";
        }
        butn.disabled=true;
        return `This is a car ${carName} and ${stringChanged}`;
    }

    var carName='Audi';
    var carPrice=document.getElementById("1");
    const carsTagged=cars`This is a car ${carName} and its price is ${carPrice.value}`;
    const print=document.createElement("h1");
    print.innerHTML=carsTagged;
    body.appendChild(print);
}