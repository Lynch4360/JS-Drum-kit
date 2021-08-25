// // Log to console
// console.log('Hello World');
// console.log(123);
// console.log(true);
// var greeting = 'Hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error('This is some error');
// console.clear();
// console.warn('This is a warning');
// console.time('Hello');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
// console.timeEnd('Hello');
// console.clear();

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
const