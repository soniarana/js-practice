
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


//=============================== Revised Code =================================

/*var distinctNames = persons.map( person => person.name ).reduce( ( prev , curr )=>{
 //if( prev.indexOf(curr) === -1){
 //OR
 if( !prev.includes(curr)){          //we will always use includes from now on
     prev.push(curr);
 }
 return prev;
},[]);

console.log(distinctNames);

*/

















/*consider following array

var persons = [ { name : "Tushar", age : 17 },{ name : "Anil", age : 19 },{ name : "Tushar", age : 18 },{ name : "Akshay", age : 19 }];

Write a program to fetch all distinct names from person collections

Do this 
a) using reduce


Output should be [ "Tushar","Anil","Akshay"] */
