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
const toonies: number = totalCentsNumber / 200 | 0;
const remainingToonies: number = totalCentsNumber % 200;

// loonie calculations
const dollars: number = remainingToonies / 100 | 0;
const remainingDollars: number = remainingToonies % 100;

// quarter calculations
const quarters: number = remainingDollars / 25 | 0;
const remainingQuarters: number = remainingDollars % 25;

// dime calculations
const dimes: number = remainingQuarters / 10 | 0;
const remainingDimes: number = remainingQuarters % 10;

// nickel calculations
const nickels: number = remainingDimes / 5| 0;
const remainingNickels: number = remainingDimes % 5;

// pennie calculation
const pennies: number = remainingNickels;

console.log(`Your change is: ${toonies} toonies, ${dollars} loonies, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, and ${pennies} pennies.`);

console.log("\nDone.");
