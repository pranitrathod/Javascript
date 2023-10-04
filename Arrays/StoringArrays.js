const differentArrayList=Array(1,3,4,{name:'pranit'});

//NOTE: In above,array expression java doesn't allow us to write such code but Javascript,know the difference!
console.log(differentArrayList);


const Two2dArray=Array([1,2,3,4],[{name:'Pranit',age:23,city:'Mumbai'}],);



//how can we use for in such cases
for (const data of Two2dArray )
{
    for (const dataPoint of data) {
   console.log(dataPoint)}
}