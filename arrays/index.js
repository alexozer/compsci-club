"use strict";

//example1();
//example2();
//example3();
//example4();
example5();

/*
 * Example 1: Double all numbers in an array
 */

// Converts a string of comma-separated numes, like
// "25,-83.35,6,1,-4"
// to an array of numbers:
// [25, -83, 6, 1, -4]
function numStrToArray(str) {
	var nums = [];

	var numStrings = str.split(",");
	for(var i = 0; i < numStrings.length; i++) {
		var num = numStrings[i];

		// If the number is not valid, throw it away
		if(isNaN(num)) {
			continue;
		}

		// We need to convert num from a string to a "real" number
		nums.push(Number(num));
	}

	return nums;
}

function example1() {
	var input = prompt("Enter a list of numbers");
	var numArray = numStrToArray(input);
	
	for(var i = 0; i < numArray.length; i++) {
		numArray[i] *= 2;
	}

	alert("Doubled numbers: " + numArray);
}

/*
 * Example 2: palindrome checker
 * A palindrome is a word that is the same backwards.
 * Examples: mom, wow, racecar
 */

function isPalindrome(str) {
	for(var i = 0; i < str.length / 2; i++) {
		var oppositeI = str.length - 1 - i;

		// The letters on the other end better match!
		if(str[i] !== str[oppositeI]) {
			return false;
		}
	}

	return true;
}

function example2() {
	var str = prompt("Enter a word to check if it is a palindrome");

	if(isPalindrome(str)) {
		alert("'" + str + "' is a palindrome!");
	} else {
		alert("'" + str + "' is not a palindrome.");
	}
}

/*
 * Example 3: Check if array is sorted
 */

function isSorted(arr) {
	for(var i = 0; i < arr.length - 1; i++) {
		if(arr[i+1] < arr[i]) {
			return false;
		}
	}

	return true;
}

function example3() {
	var input = prompt("Enter a list of numbers");
	var numArray = numStrToArray(input);

	if(isSorted(numArray)) {
		alert("List is sorted!");
	} else {
		alert("List is not sorted.");
	}
}

/*
 * Example 4: Sort array with BubbleSort
 * BubbleSort is very simple, but inefficient
 * It works by going through the array, swapping two
 * 	adjacent values if the first one is higher than the second,
 * 	and repeating until the array is sorted.
 *
 * Remember that we can reuse our isSorted() function here!
 */

function bubbleSort(arr) {
	// Arrays are passed by "reference"
	// This means that as an argument to this function,
	// 	we can modify them, and the changes are visible to
	// 	whatever code called the function

	while(!isSorted(arr)) {
		for(var i = 0; i < arr.length - 1; i++) {
			if(arr[i] > arr[i+1]) {
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
			}
		}
	}
}

function example4() {
	var input = prompt("Enter a list of numbers");
	var numArray = numStrToArray(input);

	bubbleSort(numArray);

	alert("Sorted list: " + numArray);
}

/*
 * Example 5: Sort array with SelectionSort
 * This is a lot more efficient than BubbleSort
 * It works by:
 * 	Finding the lowest number in the array
 * 	Swapping it with the first number in the array
 * 	Finding the second lowest number
 * 	Swapping that with the second number in the array
 * 	... and so on
 */

function selectionSort(arr) {
	for(var swapI = 0; swapI < arr.length - 1; swapI++) {
		// Holds the lowest found value on this pass
		var lowNum = Infinity;
		var lowI = swapI;

		for(var scanI = swapI; scanI < arr.length; scanI++) {
			if(arr[scanI] < lowNum) {
				lowNum = arr[scanI];
				lowI = scanI;
			}
		}

		// Swap the low value with the beginning of the array
		arr[lowI] = arr[swapI];
		arr[swapI] = lowNum;
	}
}

function example5() {
	var input = prompt("Enter a list of numbers");
	var numArray = numStrToArray(input);

	selectionSort(numArray);

	alert("Sorted list: " + numArray);
}
