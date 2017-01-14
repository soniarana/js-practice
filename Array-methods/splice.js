var dishArray=[{name:"paneer", isVeg:true},
{name:"chicken", isVeg:false},
{name:"Roti", isVeg:true},
{name:"daal", isVeg:true},
{name:"fish", isVeg:false}];

//if non veg item exist then remove it and replace with ice cream
dishArray.forEach((item,index)=>{
    if(!item.isVeg){
        dishArray.splice(index,index,{name:"ice cream",isVeg:true});
    }
});
    console.log("veg menu",dishArray);
