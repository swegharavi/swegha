// //ARRAY
// var lists=["dog","swan","cat","lion","cow"];
// console.log(lists[0]);

// lists.shift();
// lists.pop();
// lists.push();
// lists.concat();
// lists.sort();
// ----------------------------------------------------
//  Advanced array

// const array=[1,4,6,12];
// const newArray=array.forEach((num)=>{
//    num*2;
// })
// console.log(new array);

// ------//

// const array=[1,4,6,12];
// const double=[]
// const newArray=array.forEach((num)=>{
//   double.push(num*2);
// })
// console.log(double);

//MAP ARRAY-------------------------------------

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray1 = arrayNum.map((num, i) => {
// 	return num * 2;
// })

//FILTER ARRAY-------------------------------------
// const filterArray=array.filter(num=>{
//    return num>5
// });
// console.log(filterArray);


// const mapArray=array.map(num=>num*2);
// console.log(mapArray);


//REDUCE---------------------------------------------
// const reduceArray=array.reduce((accumulator,num)=>{
//    return accumulator + num
// },5);
// console.log(reduceArray);

// ----------------------------------------------------


const array = [
	{
		username: "john",
		team: "red",
		score: 5,
		items: ["ball", "book", "pen"]
	},
	{
		username: "becky",
		team: "blue",
		score: 10,
		items: ["tape", "backpack", "pen"]
	},
	{
		username: "susy",
		team: "red",
		score: 55,
		items: ["ball", "eraser", "pen"]
	},
	{
		username: "tyson",
		team: "green",
		score: 1,
		items: ["book", "pen"]
	},

];
// ----Map---//  readable function
array.map((item) => {
	console.log(item.team)
}
)
//---Filter--//    return a array by our condition

var filteredArray = array.filter((user,index) => {
	return user.username !== "tyson";
})
console.log(filteredArray)

//---reduce---//

