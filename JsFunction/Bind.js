//Let's say you have a function which give message dynamically like
//Today is monday with your working accurancy
//Today is Tuesday
//Today is funday
//Today is github day
//Today is javascript event day

//QUESTION:will you write a function for every single message or will you just use bind for single use
//YES!,bind() function will create a new function which we can't see but it added somewhere for us to execute this dynamic msg
//Well we can logically do this things but our code will be more overwheling for other developer to understand
//A good SDE is one who write clean code

//refer below example to learn more


//NOTE:we are using Callback here as well learn just now(if you are reading this in future please refer callBack codebase doc in this directory)
const msg=(callBack)=>
{
    callBack();//this is call back function,in this we dont call functio but browser does the job for us
}

const showMsg1=(msg,sum)=>
{
    console.log(msg+' ',sum);
}

msg(showMsg1.bind(this,"Today is monday and your working accurancy is =",50));
msg(showMsg1.bind(this,"Today is tuesday and your working accurancy is =",30));
msg(showMsg1.bind(this,"Today is wednesday and your working accurancy is =",20));
msg(showMsg1.bind(this,"Today is thursday and your working accurancy is =",10));



//So keynote ,HERE we didn't declared any function we just binded that,and bind() will create a new function for us and execute as intended!

//So without using cumbersome function or making our code more complicated we just use bind() thats all!





