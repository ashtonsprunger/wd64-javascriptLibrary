/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/
// let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];

// console.log(`Hello ${students[1]}!`);
// console.log(`Hello ${students[6][2]}!`);

// let food = ['cheese', 'hotdogs', 'pizza'];
// console.log(food);


// // adds to end
// food.push('pie');
// console.log(food);

// // removes from end
// food.pop();
// console.log(food);

// // reasigns an elament
// food[1] = 'bananas';
// console.log(food);

// // replaces given starting position with last argument
// food.splice(0, food.length, true);
// console.log(food);

// // adds element to beggining
// food.unshift('me')
// console.log(food);

// // removes first element
// food.shift();
// console.log(food);

// // returns the number of elements in the array
// let length = food.length;
// console.log(length);

// food.push('hello', 'hi');
// food.unshift('more')

// let arr = ['hello', 'hello', 'hi'];
// // returns the array as a string
// console.log(arr.toString());
// console.log(food.toString());

// // executes a provided function once for each element in an array
// let foodList = ['apple', 'pear', 'banana'];
// foodList.forEach(fooditem => console.log(fooditem));


/*
! CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ['Columbo', 'Karate Kid', 'Jaws', 'Top Gun'];
movies.forEach(movie => console.log(movie));
movies.push('Indiana Jones');

console.log(movies);

movies.splice(1, 1, 'Harry Potter');

console.log(movies);