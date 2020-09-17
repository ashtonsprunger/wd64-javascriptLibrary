let x = 10;
// console.log(x);

// console.log(document.body);

// document.getElementById('testParagraph').style.color = 'blue';

let testPara = document.getElementById('testParagraph');
testPara.style.color = 'red';
console.log(testPara);

console.dir(testPara);


console.log(document.querySelectorAll('p.sampleClass'));


document.querySelectorAll('p.sampleClass')[2].innerText += '. My text has changed!';
document.querySelectorAll('p.sampleClass')[2].id = 'num3';

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    pTag.innerText = 'My text has changed using a forEach() method.'
    pTag.textContent = 'My text has changed using a forEach() method.'
    pTag.innerHTML = 'My text has changed using a forEach() method.'
})


let showSpan = document.getElementById('spanTest');

console.log(showSpan.innerText);
console.log(showSpan.textContent);
console.log(showSpan.innerHTML);

let btn = document.getElementById('clickThis');

btn.style.color = 'white';
btn.style.backgroundColor = 'red';

let red = true;

btn.addEventListener('click', event => {
    event.target.style.backgroundColor = red ? 'blue' : 'red';
    red = !red;
})

// btn.addEventListener('click', event => {
//     color = 'blue'
//     back = 'white'
//     event.target.style.backgroundColor = color;
//     event.target.style.color = back;
//     event.target.innerText = 'GOOD JOB!'
// })



let input = document.getElementById('nameInput');

input.addEventListener('keyup', e => {
    console.log(e.target.value);
    // console.log(document.getElementsByTagName('p'))
    document.getElementsByTagName('p')[0].innerText = 'Something Changed!'
    if(e.target.value == ''){
        document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed...';
    } else {
        document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${e.target.value}`;
    }
})

btn.addEventListener('click', e => {
    console.log(e);
})

let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}