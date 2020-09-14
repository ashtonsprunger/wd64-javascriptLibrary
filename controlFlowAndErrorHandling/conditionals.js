let cloudy = false;
let rainy = false;

if(cloudy && rainy){
    console.log('It\'s raining!!');
}else if(rainy && !cloudy){
    console.log('Somehow it\'s raining with no clouds!');
}else if(!rainy && !cloudy){
    console.log('The weather is nice and sunny!');
}else{console.log('It\'s cloudy!!');
}

let today = 75;

if(today < 70){
    console.log('It is ' + today + ', wear a jacket.')
}else{
    console.log('It is ' + today + ', no jacket needed.')
}

/*
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let name = 'ashton';

if(name == 'ashton'){
    console.log(`Hello, my name is ${name}`);
}else{
    console.log(`Hello, is your name ${name}?`)
}

let cookTime = 45;

if(cookTime === 45){
    console.log('Let us feast!')
}else if(cookTime >= 30){
    console.log(`It has only been ${cookTime} minutes. Wait another 5 - 15 minutes.`)
}else if(cookTime >= 20){
    console.log(`It has only been ${cookTime} minutes. Wait another 10 - 25 minutes.`)
}else{
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it...`)
}

//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 17;

if(age >= 25){
    console.log('You can rent a car!');
}else if(age >= 21){
    console.log('You can drink!');
}else if(age >= 18){
    console.log('You can vote!');
}else{
    console.log('Sorry, you\'re too young to do anything.');
}



// let myName = 'ashton';


// if(myName == 'ashton'){
//     console.log(`Hello, my name is ${myName}`);
// }else{
//     console.log(`Hello, is your name ${myName}?`);
// }

//! CHALLENGE
// Take this if/else statement and make it into a ternary.
let lampOn = true;
let daytime = true;

if(lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
    console.log('The lamp is on during the day')
} else if(lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
}

lampOn && !daytime ? console.log('The lamp is on during the night') : !lampOn && !daytime ? console.log('The lamp is off during the night') : lampOn && daytime ? console.log('The lamp is on during the day') : !lampOn && daytime ? console.log('The lamp is off during the day') : console.log('What lamp?');


let instructor = 'Ing';

switch(instructor){
    case 'Ing':
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Zach':
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Josh':
        console.log(`${instructor} is a part of the Software Dev Team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);
}

instructor = 'Grant';

switch(instructor){
    case 'Ing':
    case 'Adam':
    case 'Eric':
    case 'Zach':
    case 'Donovan':
        console.log(`${instructor}, yep, web`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
        console.log(`${instructor}, yep, software`);
        break;
    default:
        console.log(`${instructor}, nope`)
}

//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

let grade = 101;

switch(true){
    case (grade > 100):
        console.log(`${grade} is not a valid grade!`)
        break;
    case (grade > 88):
        console.log(`passing: A (${grade})`);
        break;
    case (grade > 78):
        console.log(`passing: B (${grade})`);
        break;
    case (grade > 65):
        console.log(`passing: C (${grade})`);
        break;
    case (grade > 59):
        console.log(`passing: D (${grade})`);
        break;
    case (grade > -1):
        console.log(`passing: F (${grade})`);
        break;
    default:
        console.log(`${grade} is not a valid grade!`)
}