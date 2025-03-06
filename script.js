//your JS code here. If required.
function submitForm(){
let data=[1,2,3,4,5];

let myPromise1=new Promise((resolve,reject)=>{
  var result=[]
  for(let i=0;i<data.length;i++){
    if(data[i]%2==0){
      result.push(data[i]);
    }
  }
  setTimeout(()=>{
    resolve(result)
  },1000)
})

let myPromise2=(array)=> new Promise((resolve,reject)=>{
  var result = array.map(item => item * 2);
  setTimeout(()=>{
    resolve(result)
  },3000)
})

myPromise1.then((array)=>{
  console.log(array); //logs: [2, 4]
	document.getElementById("output").innerText=array;
  return myPromise2(array);
}).then((array1)=>{
  console.log(array1); //logs: [4, 8]
	document.getElementById("output").innerText=array1;
})

}

submitForm();