var numArray = [ 1 , 3 , 4 , 7 , 8];
var newArray =numArray.map(function(item){
 if(item %2 !=0){
item=item +1;
}
return item;
});
console.log("modified array",newArray);


//=============================== Revised Code =================================

numArray.map( item => item.num % 2 === 0 ? item : ++item });






















/*map

consider following array
var numArray = [ 1 , 3 , 4 , 7 , 8]
write an piece of code which will check every element and if the element is odd it will increment it by one to make it even . leave even numbers as is.
so at last we should have all even numbers in array

output should look like

[ 2 ,4 ,4 , 8 , 8]

*/
