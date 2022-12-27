// Reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context 
// this- (window obj)
const obj = {
    a: function(){
        console.log(this);
    }
}

// instantiation
class Player{
    constructor(name, type){
        console.log(this);
        this.name = name;      //this- acess entir properties
        this.type = type;
    }
    introduce(){
        console.log(`hi i am ${this.name},iam a ${this.type}`)
    }
}
 
class Wizard extends Player{
    constructor(name, type){
         super(name, type)
    }
    play(){
        console.log(`i'm a ${this.type}`);
    }
}
const Wizard1 = new Wizard('Shelly','Healer');
const Wizard2 = new Wizard('Shaawn','dark magic');

console.log(Wizard1.name)




