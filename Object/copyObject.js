//There are two methods we can copy the object using ...spread operator and assign()

//1.
const object={books:'Atomic habits'}
const object2={...object};
object2.name='James';
console.log(object2," ",object);

//2.
const object3=Object.assign({name:'PRANIT',age:23},object);
console.log(object3);


