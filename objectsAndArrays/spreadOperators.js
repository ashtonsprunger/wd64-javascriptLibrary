const nameOne = ['Ashton', 'Sprunger'];
const nameTwo = ['Kate', 'Sprunger'];
const copiedNames = ['Brooke', 'Sprunger', ...nameOne, ...nameTwo];
console.log(copiedNames);


const persons = [
    {
        name: 'Ashton',
        species: 'Human',
    },
    {
        name: 'Jack',
        species: 'Dog'
    },
]

const copied = [...persons];

// console.log(persons);
// console.log(copied);

// console.log(persons);
// console.log(copied);