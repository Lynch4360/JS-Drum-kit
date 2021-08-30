// Log to console
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error('This is some error');
console.clear();
console.warn('This is a warning');
console.time('Hello');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
console.timeEnd('Hello');
console.clear();

// /*
// multi
// line
// comments
// */

// // var, let, const

// var name = 'John Doe'
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'hello';
// console.log(greeting);

// // letters, numbers, _, $
// // can not start with number
// var _name = 'John';

// // letters, numbers, _, $
// // Can not start with number

// // Multi word vars
// var firstName = 'John'; // Camel case
// var fist_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// LET
// let name;
// name = 'John Doe'
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

// const person = {
//     name: 'John',
//     age: 30
// }

// person.name = 'Sara';
// person.age = 32;

// // console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);

// console.log(numbers);


/*

Primitive data types:
Stored directly in the location the variable accesses
Stored on the Stack

String
Number
Boolean
Null
Undefined
Symbols (ES6)


Reference data types:
Accessed by reference
Objects that are stored on the heap
Apointer to a location in memory

Arrays
Object literals
Functions
Dates
Anything Else.. 


Javascript is Dynamically typed language

-Types are associated with values not variables
-The same variabel can hold multiple types
-We do not need to specify types
-Most other languages are statically typed (Java, C#, C++)
-There are supersets of JS and addons to allow staictyping 
(Typescript, Flow)
*/

// // PRIMITIVE

// // Strign
// const name = 'John Doe';
// // Number
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Undefined
// let test;
// // Symbol
// const sym = Symbol();

// // REFERENCE TYPES - Objects
// // Array
// const hobbies = ['movies', 'music'];
// // Object literal
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// let val;

// // Numbe to string
// val = String(555);
// val = String(4+4);
// // Bool to string
// val = String(true);
// // Date to string
// val = String(new Date());
// // Array to string
// val = String([1,2,3,4]);

// // to string(
//     val = (5). toString();
//     val = (true).toString();

//     // String to number
//     val =  Number('5');
//     val = Number(true);
//     val  = Number(false);
//     val = Number(null);
//     val = Number('hello');
//     val = Number([1,2,3]);

//     val = parseInt('100.30');
//     val = parseFloat('100.30');

// // Output
// // console.log(val);
// // console.log(typeof val);
// // console.log(val.length);
// // console.log(val.toFixed(2));

// const val1 = 5;
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);
// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers
// val = num1 + num2;
// val= num1 + num2;
// val = num1 + num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2,33,4,1,66,7,-2);
// val = Math.max(2,33,4,1,66,7,-2);
// val = Math.random();

// val =  Math.floor(Math.random() * 20 + 1);

// console.log(val);

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello, my name is Brad';
// const tags = 'web design, web dvleopment, programming';

// let val;

// val = firstName + ' ' + lastName;

// // Append
// val = 'Brad';
// val += 'Traversy';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// val = 'That\'s awesome, I can\'t wait';


// val = firstName.length;

// // concat
// cal = firstName.concat(' ', lastName);

// // Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// // charAt()
// val = firstName.charAt('2');
// // Get last char
// cal = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0, 4);

// // slice()
// val = firstName.slice(0, 4);

// // split
// val = str.split(' ');
// val = tags.split(',');

// // repplace()
// val = str.replace('Brad', 'Jack');

// // includes()
// val = str.includes('Hello'); // returns true or false depending on if it's in there


// console.log(val);

// const name = 'John';
// const age = 31;
// const job = 'Web Devleoper';
// const city = 'Miami';
// let html;

// function hello(){
//     return 'hello';
// }

// // Without template strings (es5)
// html = '<ul><li>Name: '+ name +'</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// html = '<ul>' +
//        '<li>Name: '+ name +'</li>' +
//        '<li>Age: '+ age +'</li>' +
//        '<li>Job: '+ job +'</li>' +
//        '<li>City: '+ city +'</li>';

// // with tmeplpate strings (es6)
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2 + 2}</li>
//         <li>${hello()}</li>
//         <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>
// `;

// document.body.innerHTML = html;

// Create some arrays
// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // check if is array
// val = Array.isArray(numbers);
// // Get isngle value from array
// val = numbers[3]; // arrays are zero based so start with index of zero
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of a value
// val = numbers.indexOf(36);

// // MUTATING ARRAYS
// // add on to end of array
// numbers.push(250);
// // add to the frot of array
// numbers.unshift(120);
// // take off from end
// numbers.pop();
// // take off from the fornt
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // Reverse the array
// numbers.reverse();

// // concatenate array
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// // use the "compare function"
// val = numbers.sort(function(x, y){
//     return x - y;
// })

// // reverse sort
// val = numbers.sort(function(x, y){
//     return y - x;
// })

// // Find
// function under50(num){
//     return num < 50;
// }

// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);



// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 30,
//     email: 'steve@aol.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     getBirthYear: function(){
//         return 2021 - this.age;
//     }
// }

// let val;

// val = person;
// // Get specific value
// val = person.firstName; // this is best practice
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//     {name: 'John', age: 30},
//     {name: 'Mike', age: 23},
//     {name: 'Nancy', age:40}
// ];

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// }

// let val;

// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('9/10/1981');

// // month is zero based like  array indexing
// val = today.getMonth();
// val = today.getDate()
// // ocunts from sunday so tuesday would give you 3 to console
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);

// if(something){
//     do something
// }else {
//     dosomething else
// }


// const id = 100;

// // EQUAL TO
// if(id == 100){
//     console.slog('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO 

// if(id != 101){
//     console.slog('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // EQUAL TO NUMBER AND TYPE

// if(id === 100){ // use this most of the time
//     console.slog('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// tEST IF UNDEFINED

// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID')
// }

// TO TEST IF GREATER OR LESS THAN

// if(id >= 200){
//     console.log('correct');
// } else {
//     console.log('incorrect')
// }

// IF ELSE

// const color = 'yellow';

// if(color === 'red'){
//     console.log('Color is red');
// } else if(color === 'blue'){
//     console.log('color is blue');
// } else {
//     console.log('color is not red or blue')
// }

// LOGICAL OPERATORS

// const name = 'Steve';
// const age = 20;

// // AND &&
// if(age > 0 && age < 12){
//     console.log(`${name} is a child`);
// } else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`);
// } else {
//     console.log(`${name} is an adult`);
// }

// // OR ||

// if(age < 16 || age > 65){
//     console.log(`${name} can not run in race`);
// } else {
//     console.log(`${name} is registered for the race`);
// }

// // TERNARY OPRATOR

// console.log(id === 100 ? 'correct' : 'incorrect');

// const color = 'red';

// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
//         break;
// }

//  let day;

// switch(new Date().getDay()){
//     case 0:
//         day = 'sunday';
//         break;
//     case 1:
//         day = 'monday';
//         break;
//     case 2:
//         day = 'tuesday';
//         break;
//     case 3:
//         day = 'wednesday';
//         break;
//     case 4:
//         day = 'thursday';
//         break;
//     case 5:
//         day = 'friday';
//         break;
//     case 6:
//         day = 'saturday';
//         break;
// }

// console.log(`Today is ${day}`);

// FUNCTIONS AND DECLARATIONS

// function greet(firstName = 'John', lastName = 'Doe'){
//     // if(typeof firstName === 'undefined'){firsName = 'John'}
//     // if(typeof firstName === 'undefined'){lastName = 'Doe'}
//     // console.log('Hello');
//     return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(greet('Steve', 'Smith'));

// FUNCTIO EXPRESSIONS

// const square = function(x = 3){
//     return x * x;
// };

// console.log(square(8)); 

// IMMEDIATELY INVOKABLE FUCNTION EXPRESSIONS - IFFE's

// (function(){
//     console.log('IFFE Ran...');
// })();

// (function(name){
//     console.log('Hello ' + name)''
// })('Brad');

// PROPERTY METHODS
// when a function is put inside an object it is then a method

// const todo = {
//     add: function(){
//         console.log('Add todo..');
//     },
//     edit: function(id){
//         console.log(`Edit todo ${id}`)
//     }
// }

// todo.delete = function(){
//     console.log('Delete todo...');
// }

// todo.add();
// todo.edit(22);
// todo.delete();

// FOR LOOP

// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('2 is my faovurite number');
//         continue;
//     }

//     if(i === 5){
//         console.log('Stop the loop');
//         break;
//     }
    
//     console.log('Number ' + i)
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }
// 
// DO WHILE - will always run once no matter what

// let i = 0;
// do {
//     console.log('Number ' + i);
//     i++;
// }

// while(i < 10);

// const cars  = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// BEST WAY TO LOOP THROUGH AN ARRAY
// cars.forEach(function(car, index, array){
    // console.log(`${index} : ${car}`);
//     console.log(array); 
// })

// MAP

// const users = [
//     {id:1, name: 'John'},
//     {id:2, name: 'Sarah'},
//     {id:3, name: 'Karan'},
//     {id:4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//     return user.name;
// });

// console.log(ids);


// FOR IN LOOP - to loop through theobject and find thre key: vlaue pairs
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }

// for(let x in user){
//     console.log(`${x} : ${user}`);
// }

// WINDOW METHODS / OBJECTS AND PROPERTYS


// Alert
// alert('Hello World');

// // PROMPT
// const input = prompt();
// alert(input);

// // CONFIRM
// if(confirm('Are you sure')){
//     console.log('YES');
// } else {
//     console.log('NO');
// }

// PROPERTY'S

// let val;

// Outer heighth and width
// val = window.outerHeight;
// val = window.outerWidth;

// INNER HEIGHT AND WIDTH - INSIDE SCROLLBARS
// val = window.innerHeight;
// val = window.innerWidth;

// Scroll points
// val= window.scrollY;


// LOCATION OBJECT
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search; 


// REDIRECT
// window.location.href = 'http://google.com';

// RELOAD
// window.location.reload();

// HISTORY OBJECT
// window.history.go(); // brigns you back to where you came from. 
// put -1 and -2 and so on to eep going further back

// val = window.history.length;

// // NAVIGATER OBJECT
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;


// console.log(val);

// GLOBAL SCOPE
var a= 1;
let b = 2;
const c = 3;


// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true) {
//     // Block Scope
//     var a= 4;
//     let b = 5;
//     const c = 6;
//     console.log('If scope: ', a, b, c);
// }

// for(let a = 0; a < 10; a++){
//     console.log(`loop: ${a}`);
// }

// console.log('Global Scope: ', a, b, c);


























