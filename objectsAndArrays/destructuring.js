const boardGames = ['Sorry', 'Monopoly', 'Uno'];

// const gameOne = boardGames[0];

const [gameOne, gameTwo, gameThree] = boardGames;
console.log(gameOne);
console.log(gameTwo);
console.log(gameThree);


const hitchHikersGuide = ['Arthur Dent', 'Trillian', 'Babel Fish', {day: 'Thursday', answer: 42}];

let [charOne, charTwo, ...otherInfo] = hitchHikersGuide;
console.log(charOne);
console.log(charTwo);
console.log(otherInfo);

hitchHikersGuide.push('marcin', 'deep thought', 'sfldk;fja;lkdfj');
[charOne, charTwo, ...otherInfo] = hitchHikersGuide;
console.log(otherInfo);

[charOne, charTwo, , , ...otherInfo] = hitchHikersGuide;
console.log('SKIPPED');
console.log(charOne);
console.log(charTwo);
console.log(otherInfo);

// const game = {
//     title: 'Fallout 76',
//     developer: 'Bethseda Game Studios',
//     platforms: [
//         'PC', 'PS4', 'XBoxOne'
//     ]
// }

// const{title, platforms} = game;
// console.log(`${title} is on ${platforms}`)

const games = [
    {
        title: 'Fallout 76',
        developer: 'Bethesda Game Studios',
        platforms: [
        'PC', 'PS4', 'XBoxOne'
        ]
    },
    {
        title: 'The Legend of Zelda: Breath of the Wild',
        developer: 'Nintendo',
        platforms: [
        'Nintendo Switch', 'Wii U'
        ]
    },
    {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: [
        'PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintento Switch', 'PSVita', 'iOS', 'Android'
        ]
    },
];

const [{title: titleOne, developer: devOne}, ,{title: titleThree}] = games;
console.log();
console.log(titleOne);
console.log(devOne);
console.log(titleThree);
console.log();

for({title, developer} of games){
    console.log(`${title} is developed by ${developer}`)
}

for({title, platforms} of games){
    for(p in platforms){
        console.log(`${title} is on ${platforms[p]}`);
    }
}