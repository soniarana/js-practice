//join all elements of array on the basis of seperator

var a = ['Wind', 'Rain', 'Fire'];
console.log(a.join());      // 'Wind,Rain,Fire'
console.log(a.join(', '));  // 'Wind, Rain, Fire'
console.log(a.join(' + ')); // 'Wind + Rain + Fire'
console.log(a.join(''));    // 'WindRainFire'

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
