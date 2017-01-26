
//bind - return a function and allow to pass arguments in this array and any no of arguments


var emp1={firstName:'sonia',dept:'Android'};

function getInfo(msg){
    console.log(msg +" "+this.firstName+ " Dept is "+this.dept);
} 

var arg=['Bind'];
var bound=getInfo.bind(emp1);
bound(arg);


