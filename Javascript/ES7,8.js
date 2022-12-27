// ECMAScript
//includes
const pets =["cat","dog","bat"]
pets.includes("birds")
confirm.log(pets) //false

//exponential operators
const square = (x) => x**2
const cube = (y) => y**3

// .padStart()
// .padEnd()
console.log('swegha'.padStart(10));
console.log('swegha'.padEnd(10));


// --------------------------------------------------------
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  'my name is Rudolf the raindeer'
  
  Object.entries(obj).map(value => value.join(" ")).join(' ')
