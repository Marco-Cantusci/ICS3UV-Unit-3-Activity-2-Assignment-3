/*
 * @author Marco Cantusci
 * @verion 1.0.0
 * @date 2025-11-14
 * @fileoverview Finding the correct change
 */

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {

	// declares variables
	var totalCentsString string
	var totalCentsNumber int

	reader := bufio.NewReader(os.Stdin)

	// input
	fmt.Print("Enter amount of cents: \n")
	totalCentsString, _ = reader.ReadString('\n')
	totalCentsString = strings.TrimSpace(totalCentsString)

	totalCentsNumber, _ = strconv.Atoi(totalCentsString)

	// process
	// toonie calculations
	var toonies int = totalCentsNumber / 200
	var remainingToonies int = totalCentsNumber % 200

	// loonie calculations
	var dollars int = remainingToonies / 100
	var remainingDollars int = remainingToonies % 100

	// quarter calculations
	var quarters int = remainingDollars / 25
	var remainingQuarters int = remainingDollars % 25

	// dime calculations
	var dimes int = remainingQuarters / 10
	var remainingDimes int = remainingQuarters % 10

	// nickel calculations
	var nickels int = remainingDimes / 5
	var remainingNickels int = remainingDimes % 5

	// pennie calculation
	var pennies int = remainingNickels

	// output
	fmt.Printf("Your change is: %d toonies, %d loonies, %d quarters, %d dimes, %d nickels, and %d pennies.", toonies, dollars, quarters, dimes, nickels, pennies)

	fmt.Println("\nDone.")

}
