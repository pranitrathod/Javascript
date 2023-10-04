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

const arr=[1,2,3,4,5,6,7,8];
const newObj=arr.filter((num,id,arr)=>{return num>6;});console.log(newObj);



