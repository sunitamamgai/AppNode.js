//it does not give output immediately
const fetchData =()=>{
    const promise = new Promise((resolve,reject)=>{

    
    setTimeout(()=>{
        resolve('done');
    },1500);
});
return promise;
};
setTimeout(()=>{
    console.log('timer is done!');
    fetchData().then(text =>{
        console.log(text);
        return fetchData();
    }).then(text2=>{
        console.log(text2);
    });
    
},2000);//,1 is the milli second provide to see its output which doesnot happen immediately

console.log('hello!');
console.log('hi');
