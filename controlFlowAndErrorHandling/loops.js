for(let i = 2; i > -10; i -= 4){
    console.log(i);
}

let word = 'supercalifragilisticexpialidocious';

for(let i = 0; i < word.length; i++){
    console.log(i, word[i])
}

let city = {
    name: 'indy',
    speedway: true
}

for(info in city){
    console.log(city[info])
}
 let list = ['milk', 'eggs', 'beans', 'bananas'];

 for(item in list){
     console.log(list[item])
 }

 //! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.

//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let name = 'piCard';
let newName = '';
let letter = 0


for(n in name){
    console.log(n)
    console.log(letter)
    console.log(!n)
    !Number(n) ? newName = name[n].toUpperCase() : newName += name[n].toLowerCase();
}

console.log(newName)
console.log()
// newName = name[0] + name[1-name.length-1];


let indexArr = ['spot 1', 2, true, 'four'];

for(pos of indexArr){
    console.log(pos);
}

name = 'jeff';

switch(name){
    case 'chad':
    case 'tara':
    case 'ashton':
    case 'kate':
    case 'gabe':
    case 'zoe':
    case 'georgia':
    case 'addie':
    case 'brynn':
        console.log(`${name} is in the sprunger family.`);
        break;
    default:
        console.log(`${name} is not in the sprunger family.`)
}