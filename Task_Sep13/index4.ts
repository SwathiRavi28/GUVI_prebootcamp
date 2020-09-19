//Chunk
function chunks (arr, size){
  let arrayChunks = [];
  for (let i = 0; i < arr.length; i+=size ){
  let arrayChunk = arr.slice(i, i+size);
  arrayChunks.push(arrayChunk);  
}
  return arrayChunks;
}

var arr1=[2,3,4,5,5,6,7];
var result=chunks(arr1,3);
console.log(result);
//Sum
function sum_Arr(originalArray){
  let sum=0;
  for(let i=0;i<originalArray.length;i++){
   sum=sum+originalArray[i];
  }
  return sum;}
  let arr2=[3,2,5,6,7]
  var result_sum=sum_Arr(arr2);
  console.log(result_sum);
  //Reduce
  const myReduce = (list, initial_Value, red) => {
    if(list.length === 0) {
      return initial_Value;
    } else {
      const [first, ...rest] = list;
      const updatedAcc = red(initial_Value, first);
      return myReduce(rest, updatedAcc, red);
    }
  }
  const Words = wordList => {
    return myReduce(wordList, {}, (acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    });
  };
  
  var result_Red=Words(["hello", "world", "hello", "dogs", "hello", "cats"]);
  console.log(result_Red);
  //Filter
  Array.prototype.my_filter =  function (fun) {
    var filtered = [];
    for(let i = 0; i < this.length; i++) {
      if (fun(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
  };
  
  var Arr = [2012,2020,2019,2013,2010,2016].my_filter(function(ele, index, arr) {
      
      
    return ele%2===0;
  });
  
  console.log(Arr);
  //Find
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
  var i;
  
  function lodash1(u,ag,act){
      
      for(i=0;i<users.length;i++)
      {
      if(users[i].age==ag&&users[i].active==act){
      console.log("Testcase1: ",users[i].user);
          
      }
  }
      
  }
  function lodash2(u,act){
      
      for(i=0;i<users.length;i++)
      {
      if(users[i].active==act){
      console.log("Testcase2: ",users[i].user)}
          
      }
  }
  function lodash3(u,act){
      
    if(act==='active'){
        console.log("Testcase3: ",u[0].user);
    }
    if(act==="age"){
       console.log( "Testcase3: ",u[0].user);
    }
    
  }
  function lodash(u,ag){
      
      for(i=0;i<users.length;i++)
      {
      if(users[i].age < ag)
      {
          return users[i].user
      }}
  }
  
  
  
  lodash1(users,1,true);
  lodash2(users,false);
  lodash3(users,'active');
  var ans=lodash(users,40);
  console.log("Testcase4: ",ans);
  

