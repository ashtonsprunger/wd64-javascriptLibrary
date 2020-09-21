let lotrObj = {
    nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
    runTime: 288,
    characters: [
        {
            name: 'Legolas',
            age: 2931,
            items: [
                {itemOne: 'Bow and Arrow'},
                {itemTwo: 'Dagger'}
            ]
        },
        {
            name: 'Gandalf',
            age: 2019,
            items: [
                {itemOne: 'Sword'},
                {itemTwo: 'Staff'}
            ]
        }
    ],
    genre: 'Action & Adventure'
}

console.log(lotrObj.nameOfMovie);
console.log(lotrObj.runTime);
console.log(lotrObj.characters);
console.log(lotrObj.characters[0].name);
console.log(lotrObj.characters[0].items[0].itemOne);