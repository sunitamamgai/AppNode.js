const person = {
    name : 'sunita',
    age: 22,
    greet() {
        console.log('Hi, I am ' +  this.name);
    }
};
//object destructuring

const printName =({name})=>{
    console.log(name);
}
printName(person);

const{ name,age} =person;
console.log(name ,age);
//person.greet();
//console.log(person);
//arrays 
//const hobbies = ['sports','cooking'];
//for (let hobby of hobbies){
  //  console.log(hobby);
//}

//console.log(hobbies.map(hobby =>'hobby:'+hobby));
//console.log(hobbies);
//object and arrays are reference type 
//hobbies.push('programming');
//console.log(hobbies);
//rest and spread operators
//const copiedArray = hobbies.slice();
//console.log(copiedArray);
//another technique
//const copiedArray = [...hobbies];//...spread operator alll the element are pull out
//console.log(copiedArray);
//rest operator
//const toArray = (...args)=> {
  //  return args;
//};
//console.log(toArray(1,2,3,4));
