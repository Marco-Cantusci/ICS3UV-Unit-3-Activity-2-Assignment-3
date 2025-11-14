/*
 * @author Marco Cantusci
 * @verion 1.0.0
 * @date 2025-11-14
 * @fileoverview Finding the correct change
 */

const totalCentsString: string = prompt("Enter amount of cents: \n") || "\n";

const totalCentsNumber: number = parseInt(totalCentsString);

// process
// toonie calculations
let toonies: number = totalCentsNumber / 200 | 0;
let remainingToonies: number = totalCentsNumber % 200;

// loonie calculations
let dollars: number = remainingToonies / 100 | 0;
let remainingDollars: number = remainingToonies % 100;

// quarter calculations
let quarters: number = remainingDollars / 25 | 0;
let remainingQuarters: number = remainingDollars % 25;

// dime calculations
let dimes: number = remainingQuarters / 10 | 0;
let remainingDimes: number = remainingQuarters % 10;

// nickel calculations
let nickels: number = remainingDimes / 5| 0;
let remainingNickels: number = remainingDimes % 5;

// pennie calculation
let pennies: number = remainingNickels;

console.log(`Your change is: ${toonies} toonies, ${dollars} loonies, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, and ${pennies} pennies.`);

console.log("\nDone.");
