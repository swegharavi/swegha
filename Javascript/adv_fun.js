// Closures

// const first = () => {
//     const greet = 'Hi';
//     console.log("parent")

//     const second = () => {
//         const name = "bobby";
//         console.log(name)
//         alert(greet);
//     }
//     return second;
// }

// const newFun = first();
// newFun()

// -----//
//Closure: What does the last line return?
// const addTo = x => y => x + y
// var addToTen = addTo(10)
// addToTen(3) // returns 13

// -----------------------------------------------------------------------------------------

// Currying - evaluating functions with multiple arguments
//  and decomposing them into a sequence of functions with a single argument. 

// const multiply = (a,b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// const multiplyBy5 = curriedMultiply(5);
// -----//
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1) // 31
// -----//
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12) // 17


// ---------------------------------------------------------------------------------------------
// Compose - the result of one function is passed on to the
// next function, which is passed to another until the final function is executed for the final result.

// const compose = (f, g) => (a) => f(g(a));  //sum(sum(5))
// const sum = (num) => num + 1;
// compose(sum, sum)(5);
// -----//
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10) // 16



