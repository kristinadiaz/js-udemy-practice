'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');

const interface = 'Audio';
const private = 534;
const if = 23;


// Functions
function logger() {
    console.log('My name is Kristina');
}

// invoking, calling, running a function
logger(); 
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function Declarations vs. Expressions

    // Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1984);

    // Function Expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear
}
const age2 = calcAge2(1984);

console.log(age1, age2)


// Arrow Functions (implicit return)
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1984);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearUntilRetirement(1984, 'Kristina'));
console.log(yearUntilRetirement(1980, 'Jane'));


// Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


// Reviewing Functions
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1984, 'Kristina'));
console.log(yearsUntilRetirement(1950, 'Jane'));
*/

//////////////////////////////////////////////////
// Coding Challenge #1
/* 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
- Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
- Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
- To calculate average of 3 values, add them all together and divide by 3
- To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 

GOOD LUCK 

const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(7, 8, 9));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`);
    } else if(avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No One Wins!')
    }
}

checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(54, 110);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);


// Introduction to Arrays
const friend1 = 'Ian';
const friend2 = 'Amy';
const friend3 = 'Chris';

const friends = ['Ian', 'Amy', 'Chris'];
console.log(friends);

// const years = new Array(1984, 2002, 2022, 2037);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Sarah';
console.log(friends);
// friends = ['Bob', 'Jane'];

const lastName = 'Diaz';
const kristina = [lastName, 'Programmer', 2022 - 1984, true, friends];
console.log(kristina);
console.log(kristina.length);

// Exercise
const calcAge = birthYear => {
    return 2037 - birthYear;
}
const years = [1984, 1969, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[years.length - 1]);
const age3 = calcAge(years[1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[years.length - 1]), calcAge(years[1])];
console.log(ages);


// Basic Array Operations (Methods)

    // Add elements
const friends = ['Amy', 'Ian', 'Chris'];
const newLength = friends.push('Sarah');
console.log(friends);
console.log(newLength);

friends.unshift('Jane');
console.log(friends);

    // Remove elements
friends.pop(); // last element of an array
const popped = friends.pop();
console.log(friends);   
console.log(popped); 

friends.shift(); // first element of an array
console.log(friends);

console.log(friends.indexOf('Amy'));
console.log(friends.indexOf('Ian'));
console.log(friends.indexOf('Chris'));

friends.push(23);
console.log(friends.includes('Amy'));
console.log(friends.includes('Chris'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Amy')) {
    console.log('You have a friend called Amy')
}
*/

//////////////////////////////////////////////////
// Coding Challenge #2
/* 
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value 
is different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as 
array values (so don't store the tip values in separate variables first, but right 
in the new array) 

GOOD LUCK 


const calcTip = bill => {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}
// console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(bills, tips, totals);


// Introduction to Objects
const kristinaArray = [
    'Kristina',
    'Diaz',
    2022 - 1984,
    ['Amy', 'Ian', 'Chris']
];

const kristina = {
    firstName: 'Kristina',
    lastName: 'Diaz',
    age: 2022 - 1984,
    job: 'Programmer',
    friends: ['Amy', 'Ian', 'Chris']
};

console.log(kristina);


// Dot vs. Bracket Notation
const kristina = {
    firstName: 'Kristina',
    lastName: 'Diaz',
    age: 2022 - 1984,
    job: 'Programmer',
    friends: ['Amy', 'Ian', 'Chris']
};

// console.log(kristina);

// console.log(kristina.lastName);
// console.log(kristina['lastName']);

// const nameKey = 'Name';
// console.log(kristina['first' + nameKey]);
// console.log(kristina['last' + nameKey]);

// console.log(kristina.'last' + nameKey);

// const interestedIn = prompt('What do you want to know about Kristina? Choose between firstName,lastName, age, job, and friends');

// if (kristina[interestedIn]) {
//     console.log(kristina[interestedIn]);
// } else {
//     console.log('Wrong request! What do you want to know about Kristina? Choose between firstName,lastName, age, job, and friends')
// }

// kristina.location = 'Colorado';
// kristina['instagram'] = '@krissied1984';
// console.log(kristina);

// Challenge
// "Kristina has 3 friends, and her best friend is called Amy."

console.log(`${kristina.firstName} has ${kristina.friends.length} friends, and her best friend is called ${kristina.friends[0]}.`);


// Object Methods
const kristina = {
    firstName: 'Kristina',
    lastName: 'Diaz',
    birthYear: 1984,
    job: 'programmer',
    friends: ['Amy', 'Ian', 'Chris'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

// console.log(kristina.calcAge());

// console.log(kristina.age);
// console.log(kristina.age);
// console.log(kristina.age);

// Challenge
// "Kristina is a 53 year old programmer, and she has a driver's license."
console.log(kristina.getSummary());
*/

//////////////////////////////////////////////////
// Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

GOOD LUCK 


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`);
}


// Iteration: The for Loop
// console.log(`Lifting weights repetition 1`);
// console.log(`Lifting weights repetition 2`);
// console.log(`Lifting weights repetition 3`);
// console.log(`Lifting weights repetition 4`);
// console.log(`Lifting weights repetition 5`);
// console.log(`Lifting weights repetition 6`);
// console.log(`Lifting weights repetition 7`);
// console.log(`Lifting weights repetition 8`);
// console.log(`Lifting weights repetition 9`);
// console.log(`Lifting weights repetition 10`);

// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


// Iteration: Looping Arrays, Breaking, and Continuing
const kristina = [
    'Kristina',
    'Diaz',
    2022 - 1984,
    ['Amy', 'Ian', 'Chris'],
    true
];

const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);

for(let i = 0; i < kristina.length; i++) {
    // Reading from kristina array
    console.log(kristina[i], typeof kristina[i]);

    // Filling types array
    // types[i] = typeof kristina[i];
    types.push(typeof kristina[i]);
}

console.log(types);

const years = [1984, 2002, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);

// continue and break
console.log('---Only Strings---');
for(let i = 0; i < kristina.length; i++) {
    if(typeof kristina[i] !== 'string') continue;
    console.log(kristina[i], typeof kristina[i]);
}

console.log('---Break With Number---');
for(let i = 0; i < kristina.length; i++) {
    if(typeof kristina[i] === 'number') break;
    console.log(kristina[i], typeof kristina[i]);
}

// Looping Backwards and Loops in Loops
const kristina = [
    'Kristina',
    'Diaz',
    'programmer',
    2022 - 1984,
    ['Amy', 'Ian', 'Chris'],
    true
];

for(let i = kristina.length - 1; i >= 0; i--) {
    console.log(i, kristina[i]);
}

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----------Starting Exercise ${exercise}--------------`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight rep ${rep}`);
    }
}

// The While Loop
// console.log('-----For Loop-----')
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// console.log('-----While Loop-----')
// let rep = 1;
// while(rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++
// };

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end...');
}
*/

//////////////////////////////////////////////////
// Coding Challenge #4
/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:

    4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
    4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
    4.3. Call the function with the 'totals' array

GOOD LUCK 

const calcTip = bill => bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i ++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = arr => {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage(totals));
*/