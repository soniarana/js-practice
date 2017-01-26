
//Apply - invokes a function and allow to pass argument as array,

var emp1={firstName:'sonia',dept:'Android'};
var emp1={firstName:'priya',dept:'QA'};

function getInfo(msg){
    console.log(msg +" "+this.firstName+ " Dept is "+this.dept);
}

var arg=['Apply Demo'];
getInfo.call(emp1,arg);//functionName.(obj, arrayArguments)


