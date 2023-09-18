// Just like spread operator were we used for an object to paste the values to another object or array!
// Now in REST OPERATOR we use instead using to copy the value to new object we rather use REST OPERATOR at the parameter of the function!

const sumUp=(...numbers)=>//... REST OPERATION
{ let sum=0;
    for(const num of numbers){
    sum+=num;}
    return sum;

}

console.log(sumUp(1,2,3,4,5,5,6,6));