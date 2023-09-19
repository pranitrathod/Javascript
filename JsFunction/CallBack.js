let sum=10;



const computer=(cb)=>
{   sum=1+2;
    return cb();//This is call back function
}



const showMsg=()=>
{
    console.log("SUM IS =" , sum);
}
computer(showMsg);



//Ok why do we need call back functions?
//The reason is that we don't want something messed up code we just pass whole function to another function let that another function do it job for you

//REMEMBER how addEveneListiner() works?
//That's exactly what callBack works
//we don't call it but browser does it for us!