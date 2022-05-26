'use strict';

// Functions
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}.`
// }

// const spain = describeCountry('Spain', 47, 'Madrid');
// console.log(spain);
// const portugal = describeCountry('Portugal', 10, 'Lisbon');
// console.log(portugal);
// const germany = describeCountry('Germany', 83, 'Berlin');
// console.log(germany);

// Function Declarations vs. Expressions
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// const spainPercent1 = percentageOfWorld1(47);
// const usaPercent1 = percentageOfWorld1(329);
// const germanyPercent1 = percentageOfWorld1(83);

// const percentageOfWorld2 = function(population) {
//     return (population / 7900) * 100;
// }
// const spainPercent2 = percentageOfWorld1(47);
// const usaPercent2 = percentageOfWorld1(329);
// const germanyPercent2 = percentageOfWorld1(83);

// console.log(spainPercent1, spainPercent2);
// console.log(usaPercent1, usaPercent2);
// console.log(germanyPercent1, germanyPercent2);

// Arrow Functions
// const percentageOfWorld = population => (population / 7900) * 100;
// console.log(percentageOfWorld(329));

// Functions Calling Other Functions
// const percentageOfWorld = population => (population / 7900) * 100;

// function describePopulation(country, population) {
//     const averagePopulation = percentageOfWorld(population);

//     return `${country} has ${population} million people, which is about ${averagePopulation}% of the world.`
// }

// console.log(describePopulation('US', 329));
// console.log(describePopulation('Spain', 47));
// console.log(describePopulation('Germany', 83));

// Introduction to Arrays
// const populations = [47, 329, 83, 31];
// console.log(populations.length === 4);

// const percentageOfWorld1 = population => {
//     return (population / 7900) * 100;
// }

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
// console.log(percentages);

// Basic Array Operations (Methods)
// const neighbors = ['Spain', 'Belgium', 'Germany'];
// console.log(neighbors);

// neighbors.push('Utopia');
// console.log(neighbors);

// neighbors.pop()
// console.log(neighbors);

// if (!neighbors.includes('Germany')) {
//     console.log('Probably not a central European country :D');
// }

// neighbors[neighbors.indexOf('Spain')] = 'Republic of Spain';
// console.log(neighbors);

// Introduction to Objects
// const myCountry = {
//     country: 'Germany',
//     capital: 'Berlin',
//     language: 'german',
//     population: 83,
//     neighbors: ['France', 'Belgium', 'Switzerland']
// };

// // Dot vs. Bracket Notation
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries, and a capital called ${myCountry.capital}.`);

// myCountry.population = 85;
// console.log(myCountry);

// myCountry['population'] = 83;
// console.log(myCountry);

// Object Methods
// const myCountry = {
//     country: 'Germany',
//     capital: 'Berlin',
//     language: 'german',
//     population: 83,
//     neighbors: ['France', 'Belgium', 'Switzerland'],

//     describe: function() {
//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}`;
//     },

//     checkIsland: function() {
//         this.isIsland = this.neighbors.length === 0 ? true : false;
//         // this.isIsland = !Boolean(this.neighbors.length);
//         return this.isIsland;
//     }
// };
// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());

// Iteration: The for Loop
// for(let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting!`);
// }

// Iteration: Looping Arrays, Breaking, and Continuing
// const populations = [47, 329, 83, 31];
// const percentages2 = [];

// for(let i = 0; i < populations.length; i++) {
//     percentages2.push(populations[i] / 7900 * 100);
// };
// console.log(percentages2);

// Looping Backwards and Loops in Loops
// const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];

// for(let i = 0; i < listOfNeighbors.length; i++) {
//     for(let j = 0; j < listOfNeighbors[i].length; j++) {
//         console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
//     }
// }

// The While Loop
// const populations = [47, 329, 83, 31];
// const percentages3 = [];

// let i = 0;
// while(i < populations.length) {
//     percentages3.push(populations[i] / 7900 * 100);
//     i++;
// }

// console.log(percentages3);