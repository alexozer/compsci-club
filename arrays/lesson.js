"use strict";

// Before, we could work with limited, individual values
var firstName = "Emily";
var gpa = 3.85;
var colorBlind = false;

// We can store associated data into objects
var student = {
	name: firstName,
	gpa: gpa,
	colorBlind: colorBlind
};

// But what if we want to store a bunch of values,
// without having to name each one?
var primes = [2, 3, 5, 7, 11, 13, 17];
// Primes is an array, basically a list of data.

// We can store any type of data in an array, including mixed types:
var stuff = [-4, 3.1261, true, "I like potatoes", primes, student];

// Even other arrays!
var ticTacToe = [
	[true, false, true],
	[true, false, false],
	[false, true, true]];

// They're useful because we can:

// Easily iterate over them
for(var i = 0; i < primes.length; i++) {
	console.log("This number is prime: " + primes[i]);
}

// Quicky add and subtract from them
primes.push(19);
stuff.pop();

// Strings act like read-only arrays
console.log("Javascript is the best"[3]); // Outputs "a"
