"use strict";

var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
context.strokeStyle = "purple";
context.lineWidth = "2";
context.lineCap = "round";

function drawSquare(context, width, offsetX, offsetY) {
	context.beginPath();

	context.moveTo(offsetX, offsetY);
	context.lineTo(offsetX, offsetY + width);
	context.lineTo(offsetX + width, offsetY + width);
	context.lineTo(offsetX + width, offsetY);
	context.lineTo(offsetX, offsetY);

	context.stroke();
	context.closePath();
}

var width = 500;
var offsetX = 50;
var offsetY = 50;

drawSquare(context, width, offsetX, offsetY);

function drawCarpetFractal(context, width, offsetX, offsetY, iterations) {
	// If this is the final iteration, abort
	if(iterations <= 0) {
		return;
	}

	// Need to divide current square into 3x3 grid
	var newWidth = width / 3;

	// Draw the middle square
	drawSquare(context, newWidth, offsetX + newWidth, offsetY + newWidth);

	// Repeat for the other eight squares
	for(var row = 0; row < 3; row ++) {
		for(var col = 0; col < 3; col++) {
			// We don't draw inside the middle square
			if(row === 1 && col === 1) {
				continue;
			}

			// Calculate the offset of each new square
			var newX = offsetX + col * newWidth;
			var newY = offsetY + row * newWidth;

			drawCarpetFractal(context, newWidth, newX, newY, iterations - 1);
		}
	}
}

var iterations = 4;

drawCarpetFractal(context, width, offsetX, offsetY, iterations);
