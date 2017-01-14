function adjust(arr,index,itemToAdd){
    itemToAdd.map(item=>{
       return arr.splice(index++,0,item);
    })
  return arr;
};

var output=adjust([3,5,6],2,[2,9,7]);
console.log("output",output);



// create a function with following signature

// adjust( array , index , itemsToAdd)

// it takes three arguments first is array suppose : [ 3,5,6]
// second arguments is index : suppose : 1
// third argument is items to add at that index : [ 2,9,7]

// function should return 
// [ 3,5,   2,9,7,  6]

// given items should be added at given index..( without using push )
