// // Values and Variables
// const country = 'USA';
// const continent = 'North America';
// let population = 500;

// console.log(country);
// console.log(continent);
// console.log(population);

// // Data Types
// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// // Let, Const, Var
// language = 'English';
// // country = 'Europe';

// // Basic Operators
// console.log(population / 2);
// population++;
// console.log(population);
// let finland = 6;
// console.log(population > finland);
// let averageCountry = 33;
// console.log(population < averageCountry);

// const description = 'USA is in North America, and its 500 million people speak English';
// console.log(description);

// // Strings and Template Literals
// const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(descriptionNew);

// // Taking Decisions: if / else Statements
// if (population > 33) {
//     console.log('USAs population is above average');
// } else {
//     console.log('USAs population is 22 million below average');
// }

// // Type Conversion and Coercion
// '9' - '5'; // 4
// '19' - '13' + '17'; // 617
// '19' - '13' + 17; //23
// '123' < 57; // false
// 5 + 6 + '4' + 9 - 4 - 2; // 1143

// // Equality Operators: == vs. ===
// const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

// if(numNeighbors === 1) {
//     console.log('Only 1 border!')
// } else if(numNeighbors > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log('No borders')
// };

// Logical Operators
// const country = 'Spain';
// const continent = 'Europe';
// const population = 10;
// const language = 'Spanish';
// isIsland = false;

// if(language === 'English' && population < 50 && !isIsland) {
//     console.log('You should live in Spain');
// } else {
//     console.log('Spain does not meet your criteria')
// }

// The switch Statement
// const language = 'chinese';

// switch(language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }

// The Conditional (Ternary) Operator
// const population = 35;
// const country = 'Portugal';

// console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);