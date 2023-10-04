//There are few ways we can declare array

//1.
const arr1=[1,2,3,4,5,6];
console.log(arr1);

//2.
//Here we can either write new or not it doesn't matter even if you try out Array() it will work!
const arr2=Array(5);//first parameter state length and if you specify more than 1 number it will count as [1,2]
console.log(arr2);

//3.
const arr3=Array.of(1,2,3,4);//this is another method we can use to declare an array!
console.log(arr3);

//4.
const arr4=Array.from('hi');//this will convert iterable to an array ex: hi -> 'h','i';
console.log(arr4);

//Lets deep dive into 4th array type declaration

//Now when you querySelect it

const listArray=document.querySelectorAll('li');
console.log(listArray);//this isn't array but a nodeList
//if we want this to convert into array we use Array.from()

console.log(Array.from(listArray));//this is why we use Array.from