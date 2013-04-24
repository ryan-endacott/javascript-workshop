// This file contains many filters that you can use with the JavaScript Photofilter demo!
// The demo is the index.html file in this folder.  
// It is also currently hosted at http://mizzouacm.github.io/javascript-workshop/
// Past each filter 
// NOTE:  You may want to try to figure them out yourself!  It can be fun!

// The current filters in this file are:
// 1. Unique color filter
// 2. Basic sepia filter
// 3. Black and white filter
// 4. Simple brightness filter
// 5. Stripes effect
// 6. Checkerboard effect
// 7. Grid effect

// See if you can implement them before checking the solution!

// The filters:

/*
*  Unique Colors filter:
*  
*  This filter should hopefully (if I'm correct) scale
*  the image down to have a maximum of numColors unique colors.
*  The reason the image won't have exactly numColors unique colors (other than rounding)
*  is because it scales each pixel individually, so it only guarantees
*  a maximum of numColors uniques because each unique value may not be reached.
*
*  Note:  The inspiration for this filter comes from http://www.reddit.com/r/programming/comments/1bicsx/after_several_years_of_inactivity_the_underhanded/c96yx6w?context=2
*  That filter can also be implemented exactly :)  It's very interesting.
* 
*  Note 2:  It may be a bit over for some values because of rounding.
*  There is also probably a better way to do this.
*/
var numColors = 256;
var h = 255 / Math.pow(numColors, 1/3);
function filter(pixels) {
  for (var i = 0; i < pixels.length; i++) {
    var p = pixels[i];
    p.r = Math.floor(p.r / h) * h;
    p.g = Math.floor(p.g / h) * h;
    p.b = Math.floor(p.b / h) * h;
  }
}


// Basic sepia filter
function filter(pixels) {
  for (var i = 0; i < pixels.length; i++) {
    var p = pixels[i];
    p.r = p.r * .8;
    p.g = p.g * .5;
    p.b = p.b * .2;
  }
}


// Black and white filter
function filter(pixels) {
  for (var i = 0; i < pixels.length; i++) {
    var p = pixels[i];
    // Average all of the colors so they are all equal to make a shade of gray.
    p.r = p.g = p.b = (p.r + p.g + p.b)/3;
  }
}


// Simple brightness filter
var delta = 20; // Change this to change bright/dim effect
function filter(pixels) {
  for (var i = 0; i < pixels.length; i++) {
    var p = pixels[i];
    p.r += delta;
    p.g += delta;
    p.b += delta;
  }
}


// Stripes effect
var stripeSize = 50;
var helper = stripeSize * 2;
function filter(pixels) {
  for (var i = 0; i < pixels.length; i++) {
    var p = pixels[i];
    // Change to y to make horizontal stripes
    if (p.x % helper > stripeSize) {
      // Add your effect here
      p.r = 255;
    }
  }
}

// Checkerboard effect
var squareSize = 50;
var helper = squareSize * 2;
function filter(pixels) {
  for (var i = 0; i < pixels.length; i++) {
    var p = pixels[i];
    if ((p.x % helper > squareSize && p.y % helper > squareSize) || 
      (p.x % helper < squareSize && p.y % helper < squareSize)) {
      // Add your effect here
      p.r = p.g = p.b = 255;
    }
  }
}


// Grid effect
var gridSize = 50;
function filter(pixels) {
  for (var i = 0; i < pixels.length; i++) {
    var p = pixels[i];
    if (p.x % gridSize == 0 || p.y % gridSize == 0) {
      // Add your effect here
      p.r = p.g = p.b = 255;
    }
  }
}

// Negative filter
function filter(pixels) {
  for (var i = 0; i < pixels.length; i++) {
    var p = pixels[i];
    p.r = 255 - p.r;
    p.g = 255 - p.g;
    p.b = 255 - p.b;
  }
}