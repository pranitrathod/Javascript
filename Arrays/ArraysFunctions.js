// const hobbies=['Sports','Reading'];
// hobbies.push('Driving');//adds to the end
// hobbies.unshift('Playing Piano');//adds to the beginning
//
// hobbies.shift();//removes from the beginning
//
// hobbies.pop();//removes from the end
//
// // hobbies[4]='gym';
// console.log(hobbies);
//
// hobbies.push('Riding Horse');
// hobbies.push('Football');
//
// //Now there a method called as splice were we can insert item in the middle
//
// hobbies.splice(2,0,'Table tennis');
// console.log(hobbies);
// hobbies.splice(3,2,'Chess');
// console.log(hobbies);


// const number=Array(1,2,3,4,5,6);
// const num2=number.concat(19);//Concate is usefull when you dont want to add multiple array like 2D
// // num2.push([7]);//this will assume to add 2d array
// console.log(num2);


// const list=[{age:3},{name:'PRANIT'}];//the reason this wont work is because object are reference values
//
// console.log(list.indexOf(name));

// const list = [{ age: 3 }, {grade:2},{ name: 'PRANIT' }];
// const searchName = 'PRANIT';
//
// const numList=[1,2,3,4,5,6];
// const index = list.findIndex(item => item.name === searchName);
//
// if (index !== -1) {
//     console.log(`Found at index ${index}`);
// } else {
//     console.log('Not found');
// }

// const arr=[1,2,3,4,5,6,7,8];
// const newObj=arr.filter((num,id,arr)=>{return num>6;});console.log(newObj);
//

// const arr=[1,2,3,4,4,5];
//
// const transformation=arr.map((no,id,arr)=>{
//     const transform={no:id};
//     return transform;
//
// })
// console.log(transformation);

//Reduce()-its nothing it's basically a function which does a job of added a variable in background without we declaring in
//its fast and doesnt require loops like we used to use in other languages,in above function we dont need loop thats why we use maps,filter,etc

// const name=['P','R','A','N','I','T'];
// console.log(name.reduce((prevChar,currChar)=>prevChar+currChar,''));//much cleaner
//


//Spread operator-This we have seen in function parameter were we can able to throw as many parameter as you wish in function
//but in Javascript we have something special for array to lets see how

// const arr=[1,2,3,4,5];
// const copiedArr=[...arr];//with any loop we can able to copy as many arrList we can but this will be brand new array whatever happens to arr in future
// //does not reflect on copiedArr just go through below code!
// arr.push(6);
// // console.log(arr,copiedArr);
//
// //Another best example here is min() method
//
// console.log(Math.min(arr));//returns => NaN
//
// // here can use ... operator instead for making thos arr to iterable sperable numbers
//
// console.log(Math.min(...arr));


//Array's Destructuring

//
// const obj=[{name:'PRANIT',age:30,file:20},{name:'Pratik',age:31}];
// const [name,...rest]=obj;
// console.log(name.name,...rest);

//
// const differentArray=['PRANIT','RATHOD','Mr.','SOFTWARE ENGINEER',24];
// const [firstName,LastName,...rest]=differentArray;//This is how we do destructing in Javascript on arrays;
// console.log(firstName,LastNamerest);


