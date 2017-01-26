// if some elements or one element passes the condition then it returns true else false
var items=[2,3,5,60];
var isEven=items.some(item=>
item%2==0
);
console.log("Array isEven",isEven);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some