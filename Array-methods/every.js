//every function of array return true if it passes true for every element of array
//if condition fails for any element it returns false and don't check for rest

var ageGroup1=[10,16,12,15,20];
var ageGroup2=[15,80,16,15,18];

//check which group is teenager i.e 15<=age<=20

var a1= ageGroup1.every(age=>{
 age>=10;
});

//please check why it is returning false
var a2=  ageGroup2.every(age=>
 (age>=15&&age<=20)
);

console.log("ageGroup1 is teenager",a1);
console.log("ageGroup2 is teenager",a2);