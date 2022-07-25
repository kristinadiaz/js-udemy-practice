'use strict';

/*
// Default Parameters
const bookings = [];

const createBooking = function(
    flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers
) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

// Passing Arguments
const flight = 'LH234';
const kristina = {
    name: 'Kristina Diaz',
    passport: 6475027524
};

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Ms. ' + passenger.name;

    if(passenger.passport === 6475027524) {
        console.log('Check In')
    } else {
        console.log('Wrong passport!')
    }
};

// checkIn(flight, kristina);
// console.log(flight);
// console.log(kristina);

// Is the same as doing...
// const flightNum = flight;
// const passenger = kristina;

const newPassport = function(person) {
    person.passport = Math.floor(Math.random() * 10000000000);
};

newPassport(kristina);
checkIn(flight, kristina);

// Functions accepting callback functions
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const highFive = function() {
    console.log('👋');
};
document.body.addEventListener('click', highFive);
['Kristina', 'Amy', 'Rich'].forEach(highFive);

// Functions Returning Functions
const greet = function(greeting) {
    return function(name){
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Kristina');
greeterHey('Amy');

greet('Hello')('Kristina');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`); 

greetArr('Hi')('Kristina');

// call and apply Methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, passName) {
        console.log(`${passName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, passName})
    },
};

lufthansa.book(239, 'Kristina Diaz');
lufthansa.book(635, 'Amy Fuller');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const books = lufthansa.book;

// Does not work
// books(23, 'Rich VanGilder');

// Call method
books.call(eurowings, 23, 'Rich VanGilder');
console.log(eurowings);

books.call(lufthansa, 239, 'Ian Strouse');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: [],
};

books.call(swiss, 583, 'Kristina Diaz');

// Apply method
const flightData = [583, 'Amy Fuller'];
books.apply(swiss, flightData);
console.log(swiss);

books.call(swiss, ...flightData);

// bind Method
// books.call(eurowings, 23, 'Rich VanGilder');

const bookEW = books.bind(eurowings);
const bookLH = books.bind(lufthansa);
const bookLX = books.bind(swiss);

bookEW(23, 'Kristina Diaz');

const bookEW23 = books.bind(eurowings, 23);
bookEW23('Amy Fuller');
bookEW23('Kristina Diaz');


// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++
    console.log(this.planes);
};
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

// Challenge
const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// Immediately Invoked Function Expressions (IIFE)
const runOnce = function() {
    console.log('This will never run again!');
};
runOnce();

// IIFE
(function() {
    console.log('This will never run again!');
    const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again!'))();

{
    const isPrivate = 23;
    var notPrivate = 45;
}
// console.log(isPrivate);
console.log(notPrivate);

// Closures
const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passenger(s)`)
    }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// More Closure Examples

// Example 1
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
};

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();

console.dir(f);

// Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`)
        console.log(`There are 3 groups, each with ${perGroup} passengers`)
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`)
};

const perGroup = 1000;
boardPassengers(180, 3);
*/