"use strict";

example1();
//example2();
//example3();

function cylinderVolume(radius, height) {
	return Math.PI * radius * radius * height;
}

/*
 * Example 1: Basic usage
 */
function example1() {
	// The variable names don't have to match the function's arguments
	var r = prompt("What is the radius of the cylinder?");
	var h = prompt("What is the height of the cylinder?");

	var volume = cylinderVolume(r, h);

	alert("The volume of the cylinder is: " + volume);
}

/*
 * Example 2: Slightly more advanced
 */
function example2() {
	var circumference = prompt("What is the circumference of the cylinder's base?");
	var height = prompt("What is the height of the cylinder?");

	var radius = circumference / Math.PI / 2;
	var volume = cylinderVolume(radius, height);

	alert("The volume is: " + volume);
}

/*
 * Example 3: One-liner (just for fun)
 */
function example3() {
	alert("Volume: " + cylinderVolume(prompt("Radius?"), prompt("Height?")));
}
