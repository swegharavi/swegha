console.log("Data Structure(Arrays)")
// ---------------------------------------
var list = ["apple", "orange", "mango"];
console.log(list[0]);

// using this array, 
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array)

// 1. Remove the Banana from array.
array.shift();
console.log(array)

// 2. Sort the array in order. 
array.sort();
console.log(array)

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array)

// 4. Remove "Apples" from the array.
array.splice(0, 1);
console.log(array)

// 5. Sort the array in reverse order. 
array.reverse();
console.log(array)

// using this array, 
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];
// -------------------------------------------------------------------------------------
// Object


var database = [{username: "angeline",password:"1234"}];

var newsFeed = [
    {
        username:"swegha",
        message:"hai hello swegha"
    },
    {
        username:"megha",
        message:"hai hello megha"
    }
];

var userPrompt = prompt("Name?:");
var passwordPrompt = prompt("Password?:");

function signIn(user, pass){
    if (user === database[0].username && pass ===database[0].password){
        console.log(newsFeed);
    } else {
        alert("Worng username and password");
    }
}
signIn(userPrompt,passwordPrompt);