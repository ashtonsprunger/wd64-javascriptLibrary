const secondSync = () => {
    console.log('second hello');
}

const firstSync = () => {
    console.log('first hello');
    secondSync();
    console.log('end')
}

firstSync();


// asynchronous

const networkRequest = () => {
    setTimeout(() => {
        console.log('Async Code');
    }, 2000);
}

console.log('Hello World');
networkRequest();
console.log('The End');


// API

