//  Búið til breytu sem heitir test og hefur gildi "test"
const test = "test";

// Búið til breytu sem heitir myNumber og hefur gildi 15
const myNumber = 15;

// Búið til breytu sem heitir letterD og hefur gildi "D"
const letterD = "D";

// Búið til breytu sem heitir trueBool og hefur gildi true
const trueBool = true;

// Búið til breytu sem heitir helloText og hefur gildi "Hello"
const helloText = "Hello";

// Búið til breytu sem heitir myString og hefur gildi "Hello, world!"
const myString = "Hello, World!";

// Búið til breytu sem sameina myNumber og myFloatNum og hefur gildi 20.99
let myNumber = myFloatNum = 20.99;

// Búið til breytu sem sameina letterD og myText og hefur gildi "DHello"
let letterD = myText = "DHello";

// Notið Rökvirkja til að breyta trueBool í false
let trueBool = false;

//// ---> Samanburðarvirkjar (Comparison operators) <--- ///

/// Notið equal to (==) til að bera saman myNumber við eitthvað til að fá true
console.log(myNumber == "15");

/// Notið strict equal to (===) til að bera saman myNumber við eitthvað til að fá true
console.log(myNumber === 15);

/// Notið not equal to (!=) til að bera saman myNumber við eitthvað til að fá false
console.log(myNumber != 15);

/// Notið strict not equal to (!==) til að bera saman myNumber við eitthvað til að fá false
console.log(myNumber !== 15);

/// Notið greater than (>) og berið 2 breytur saman til að fá true
console.log(9 > 6);

/// Notið less than (<) og berið 2 breytur saman til að fá false
console.log(9 < 6);

/// Notið greater or equal to (>=) og berið 2 breytur saman til að fá true
console.log(9 >= 9);

/// Notið less or equal to (<=) og berið 2 breytur saman til að fá true
console.log(9 <= 9);

//// ---> Rökvirkjar (Logical operators) <--- ///

/// Notið and (&&) og berið 2 breytur saman til að fá false
const a = 8;
const b = -6;

console.log(a > 0 && b > 0);

/// Notið or (||) og berið 2 breytur saman til að fá true
const a = 8;
const b = -6;

console.log(a > 0 || b > 0);

/// Notið not (!) og berið 1 breytu saman til að fá false
const a = 8;
const b = -6;

console.log(!(a > 0 || b > 0));
