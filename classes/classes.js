/*
    ! CLASSES
*/


class Automobile {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
};

let Vehicle = class {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
};
console.log(Vehicle.name);

let Auto = class Mobile {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
};
console.log(Auto.name);

const automobile = {
    start: function(){

    },
    stop: function(){

    }
};


// const automobile = {
//     start(){

//     },
//     stop(){

//     }
// };

class AutoMobile {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    start(){
        console.log(`This ${this.make} ${this.model}'s engine started.`);
    }

    stop(){
        console.log(`This ${this.make} ${this.model}'s engine stopped.`);
    }
};

let shevyCamaro = new AutoMobile('Shevy', 'Camaro');
let fordEscape = new AutoMobile('Ford', 'Escape');

shevyCamaro.start();
shevyCamaro.stop();

fordEscape.start();
fordEscape.stop();

class Cookie{
    constructor(type, icing, shape){
        this.t = type;
        this.i = icing;
        this.s = shape;
    }
}

let chocolateChip = new Cookie('chocolate chip', false, 'circle');
console.log(chocolateChip.t);
console.log(chocolateChip.i);
console.log(chocolateChip.s);
console.log(chocolateChip);

class Animal{
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} eats their food.`);
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name);
        this.type = breed;
    }

    play(){
        console.log(`The ${this.type} named ${this.name} fetches the ball!`);
    }
}

let Fido = new Dog('Fido', 'mutt');

Fido.eat();
Fido.play();