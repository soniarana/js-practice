// unshift added element in array at index0 and so on.

//shift remove the element at 0 index.

//eg:

var a=[2, 3, 4, 5];
a.unshift(0,1);
console.log("new arr",a);

a.splice(0,0,-3,-2,-1);
console.log("new arr using spice",a);


var removed=a.shift();
console.log("removed element is"+removed+" "+"new Arr",a);


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift