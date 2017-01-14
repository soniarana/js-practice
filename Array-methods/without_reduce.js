var persons = [{ name : "Tushar", age : 17 },
{ name : "Anil", age : 19 },
{ name : "Tushar", age : 18 },
{ name : "Akshay", age : 19 }];
var nameArr=[];

var list=persons.map(item=>{
    return item.name;

}).forEach((item,i,arr)=>{
    console.log("arr",arr);
if(nameArr.indexOf(item)==-1){
nameArr=nameArr.concat([item]);
}});
console.log("list",nameArr);


/*consider following array

var persons = [ { name : "Tushar", age : 17 },{ name : "Anil", age : 19 },{ name : "Tushar", age : 18 },{ name : "Akshay", age : 19 }];

Write a program to fetch all distinct names from person collections

Do this 
a) without using reduce

Output should be [ "Tushar","Anil","Akshay"] */
