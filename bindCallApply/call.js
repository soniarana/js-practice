
//Call - invokes a function and allow to pass argument one by one,

var emp1={firstName:'sonia',dept:'Android'};
var emp1={firstName:'priya',dept:'QA'};

function getInfo(msg){
    console.log(msg +" "+this.firstName+ " Dept is "+this.dept);
}

getInfo.call(emp1,'call');
//getInfo.call(emp2,'Hello');

