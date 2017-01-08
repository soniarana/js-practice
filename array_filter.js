var numArray = [ 1 , 3 , 4 , 7 , 8]

function isNoEven(value){
return value % 2 ==0 ? true : false;
}

var evenArray = numArray.filter(isNoEven);
console.log("modified array", evenArray);






















/*
consider following array 

var numArray = [ 1 , 3 , 4 , 7 , 8]
write an piece of code which will check every element and if the element is odd it will reject the element otherwise keep it.
so at last we should have only even numbers in array

output should look like

[ 4 , 8 ]
*/
