// async function myFn(){

// }

// const myAsyncFn = async () => {

// }

// async function fn(){
//     return 'hello';
// }

// fn().then(console.log)
// fn().then(dataFromAsyncFun => {
//     console.log(dataFromAsyncFun)
// })

async function changeImg(e){
    e.preventDefault();

    fetch('https://random.dog/woof.json')

        .then(res => res.json())
        .then(json => json.url)
        .then(url => document.getElementById('image').innerHTML = `<img src="${url}" alt="" style="width: 600px"></img>`)
        .catch(err => console.log(err));
} 

document.getElementsByTagName('form')[0].addEventListener('submit', changeImg);