
var arr = [1, 2, 3];
var out = [];
for (var i = 0; i < arr.length; i++) {
  var item = arr[i];
 
  out.push(function(item) {
    var value = function() {
      return item;
    }
    console.log(item);
    return  value;
  }(item));
}
console.log(out);
//following code will not change
out.forEach(function(func,index) {
  console.log(func());
});



















/* var arr = [1,2,3];
var out = [];
for(var i = 0; i<arr.length;i++) {
var item = arr[i];
out.push(function(){ return item; });
}

//following code will not change
out.forEach(function(func){ 
console.log(func());
 });


What should be the output .
Fix this if the output is not expected and without changing the marked code.

*/