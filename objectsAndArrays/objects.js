

// let netflix = {
//     id: 1,
//     name: "The Office",
//     season1: {
//         seasonInfo: {
//             episodeInfo: [{
//                     episode: 1,
//                     episodeName: "Pilot"
//                 },
//                 {
//                     episode: 2,
//                     episodeName: "Diversity Day"
//                 },
//                 {
//                     episode: 3,
//                     episodeName: "Health Care"
//                 },
//                 {
//                     episode: 4,
//                     episodeName: "The Alliance"
//                 },
//                 {
//                     episode: 5,
//                     episodeName: "Basketball"
//                 },
//                 {
//                     episode: 6,
//                     episodeName: "Hot Girl"
//                 },
//             ]
//         }
//     },
//     season2: {},
//     season3: {}
// };



// JSON - JavaScript Object Notation


let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs',
        rabbit2: 'Lola',
        duck: 'Daffy'
    }
}
let arr = Object.keys(spaceJam.toonSquad.rabbit1);
console.log(arr);

let arr2 = ['me', 'mom', 'dad'];
console.log(arr2['1'])

// object bracket notation

let garden = {
    veg: true,
    flower: 'sun flower',
    water: true,
    size: 12
}

let test = Object.keys(garden);
console.log(typeof test);

console.log(garden['size'])

let baking = {};
baking['zucchini'] = 'better make some bread';