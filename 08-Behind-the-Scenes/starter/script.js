'use strict';

/*
// Scoping Practice
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millennial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Amy';

            // Reassigning outer scope's variable
            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millennial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        // console.log(str);
        console.log(millennial);
        // console.log(add(2, 3));
        console.log(output);
    }

    printAge();

    return age;
}

const firstName = 'Kristina';
calcAge(1984);
// console.log(age);
// printAge();

// Hoisting and TDZ Practice
  // Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Kristina';
let job = 'Programmer';
const year = 1984;

  // Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b 
};

const addExpr = function(a, b) {
    return a + b 
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// console.log(this);

const calcAge = function(birthYear) {
    // console.log(2037 - birthYear);
    // console.log(this);
};
calcAge(1984);

const calcAgeArrow = birthYear => {
    // console.log(2037 - birthYear);
    // console.log(this);
};
calcAgeArrow(2002);

const kristina = {
    year: 1984,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    }
};
kristina.calcAge();

const matilda = {
    year: 2017
};

matilda.calcAge = kristina.calcAge;
matilda.calcAge();

const f = kristina.calcAge;
f();

// var firstName = 'Matilda';

const kristina = {
    firstName: 'Kristina',
    year: 1984,
    calcAge: function() {
        // console.log(this);
        console.log(2037 - this.year);

        // Solution 1
        // const self = this; // self or that
        // const isMillennial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };
        // isMillennial();

        // Solution 2
        const isMillennial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillennial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    }
};

kristina.greet();
kristina.calcAge();

// arguments keyword
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b 
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments)
    return a + b
};
addArrow(2, 5, 8);

let age = 37;
let oldAge = age;
age = 38;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Kristina',
    age: 37
};
const friend = me;
friend.age = 35;
console.log('Friend', friend);
console.log('Me', me);

// Primitive types
let lastName = 'Diaz';
let oldLastName = lastName;
lastName = 'Fuller';
console.log(lastName, oldLastName);

// Reference types
const amy = {
    firstName: 'Amy',
    lastName: 'Fuller',
    age: 43
};
const marriedAmy = amy;
marriedAmy.lastName = 'Diaz';
// console.log('Before Marriage:', amy);
// console.log('After marriage:', marriedAmy);
// marriedAmy = {};

// Copying objects
const amy2 = {
    firstName: 'Amy',
    lastName: 'Fuller',
    age: 43,
    family: ['Rich', 'Rachel', 'Nate']
};

const amyCopy = Object.assign({}, amy2);
amyCopy.lastName = 'Diaz';

amyCopy.family.push('Sophia');
amyCopy.family.push('Ian');

console.log('Before Marriage:', amy2);
console.log('After marriage:', amyCopy);
*/