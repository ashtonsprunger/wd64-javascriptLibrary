// console.log('test');

const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

// eventListener
searchForm.addEventListener('submit', fetchSpace);


// FETCH FUNCTION
function fetchSpace(e) {
    e.preventDefault();
    // console.log('Clicked!');

    fetch(baseURL)
        .then(results => {
            // console.log(results)
            return results.json()
        })
        .then(json => {
            displayRockets(json);
        });

}

// display function
function displayRockets(data){
    // console.log('DisplayRocket: ' + data);
    let rockets = data.forEach(r => {
        console.log(r);
        let rocket = document.createElement('li');
        // rocket.innerText = r.name;
        rocket.innerText = `${r.name} is in the country of ${r.country}`;
        spaceShips.appendChild(rocket);
    })
}