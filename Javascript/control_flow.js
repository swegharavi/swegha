// Ternary Operator

// function isUserValid(vav){
//     return vav;
// }

// var answer = isUserValid(true) ? "You may enter" : "access Denied";
// var autoAnswer ="Acc num is " + ( isUserValid(false) ? "You may enter" : "access Denied");

// console.log(answer)
// console.log(autoAnswer)

// -----//

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// var experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints)

// ----------------------------------------------------------------
// Switch Statement- excecute differnt block on code

// function moveComand(direction){
//      var whatHappens;
//      switch (direction){
//         case "forward":
//             whatHappens = "Go straight";
//             break;
//         case "back":
//             whatHappens = "Go back";
//             break;
//         case "right":
//             whatHappens = "Go right";
//             break;
//         case "left":
//             whatHappens = "Go left";
//             break;
//         default:
//             whatHappens ="Enter correct direction";
//      }
//      return whatHappens;
// }

// console.log(whatHappens)
// ----------------------------------------------------------------

// Template string

// const name = "swegha"
// const age = 25
// const pet = "Dog"

// const message = `Hey iam ${name} and am ${age} years old. I Love ${pet} ! `;
// console.log(message)


// ----------------------------------------------------------------
// Default arguments

// function greet(name='',age=25 ,pet='dog'){
//     return `Hey iam ${name} and am ${age} years old. I Love ${pet} ! `;
// }
// ----------------------------------------------------------------

// symbols

// let sym = Symbol();
// let sym1 = Symbol("eeeee");
// let sym2 = Symbol("eeeee");

// ----------------------------------------------------------------
// Arrow function

// function add(a,b){
//     return a + b;
//  }
// console.log(add(1,1))

// const add1 = (a, b) => a + b;
// console.log(add(10,10))

// -----//

// const whereAmI = (username, location) => {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }
