
 function isUnique(arr,name){
   var found=arr;
     if(arr.indexOf(name)==-1){
     found=  arr.concat([name]);
     }
     return found;
 };



var persons = [{ name : "Tushar", age : 17 },
{ name : "Anil", age : 19 },
{ name : "Tushar", age : 18 },
{ name : "Akshay", age : 19 }];


var distinctList= persons.reduce((pre ,next)=>{
  
     return pre=isUnique(pre,next.name);


},[persons[0].name]);
console.log("unique persons: ",distinctList);


















/*consider following array

var persons = [ { name : "Tushar", age : 17 },{ name : "Anil", age : 19 },{ name : "Tushar", age : 18 },{ name : "Akshay", age : 19 }];

Write a program to fetch all distinct names from person collections

Do this 
a) using reduce
b) without using reduce

Output should be [ "Tushar","Anil","Akshay"] */
