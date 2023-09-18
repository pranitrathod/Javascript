// Just like spread operator were we used for an object to paste the values to another object or array!
// Now in REST OPERATOR we use instead using to copy the value to new object we rather use REST OPERATOR at the parameter of the function!
//Also remember REST operator must be the last operator among other parameter list,if you declare them first then another argument will never pass
const sumUp=(...numbers)=>//... REST OPERATOR!
{ let sum=0;
    for(const num of numbers){
    sum+=num;}
    return sum;

}

console.log("After arguments we introduced REST Operator =",sumUp(1,2,3,4,5,5,6,6));


//******************************Before ECMAScript i.e REST FUNCTION we used to write the code as below *************************************


const subtractUp=function()
{   let sum=0;
    for (nums of arguments)//This 'argument' is magical variable in js we understand that there is an array of number being passed
    {
        sum-=nums;
    }return sum;
}

console.log("Before REST OPERATOR WE USED arguments = ",subtractUp(1,2,3,4,5,6,7,8));