Introduction to JavaScript/jQuery Workshop
==========================================
### By [Mizzou ACM](http://acm.missouri.edu/)


This is the code for Mizzou ACM's first programming workshop!  See a list of our upcoming events on our [site](http://acm.missouri.edu/events) or [fork us on GitHub](https://github.com/MizzouACM).

## Syntax Guide
This code includes a JavaScript syntax guide to familiarize yourself with JavaScript basics.  It is located in [learning/syntax.js](learning/syntax.js).  You can play around with the concepts in your browser developer console (F12) or with [this wonderful site](http://repl.it/languages/javascript).

## Photo Filters
The first portion of the workshop involved learning the basics of JavaScript syntax with a small photo filter game.  You can play around with it [here](http://mizzouacm.github.io/javascript-workshop/).  The page provides a live feed from your webcam that you can manipulate by filling in a `filter` function in the editor on the page.  The function takes an array of pixels of the following format:
```javascript
var pixel = {
  r: 255, // Red value of the pixel (0-255)
  g: 255, // Green value of the pixel (0-255)
  b: 255, // Blue value of the pixel (0-255)
  a: 255, // Alpha of the pixel (0-255)
  x: 100, // Readonly x position of the pixel
  y: 100  // Readonly y position of the pixel
};
```
For example, to turn the entire video stream black:
```javascript
function filter(pixels) {
    for (var i = 0; i < pixels.length; i++) {
        var p = pixels[i];
        p.r = p.g = p.b = 0;
    }
}
```
Many other examples of filters can be found in the coolFilters.js file. To take a screenshot of one of your awesome creations, simply click the filtered video.  The screenshots appear at the bottom of the page and can be saved with a right click like any other image.  If you're curious about how the page works, this portion of workshop is composed of index.html, webcam.js, and style.css in the main directory.  
Note: Due to browser security issues, it won't work locally unless you serve it with a webserver.  A simple way to do this is navigating to the directory and using `python -m SimpleHTTPServer` if you have Python installed.

## jQuery and HTML Manipulation
The second portion of the workshop involved making a few small jQuery demos.  We began with the template HTML in [learning/start.html](learning/start.html).  Then we learned about finding elements with CSS selectors, handling events, and more.  The finished demos can be located in the other files in the learning folder.  The demos included:
* A small point and click jQuery game, found in [learning/game.html](learning/game.html)
* A page that displays textbox input in a popup when a button is clicked, found in [learning/parrot.html](learning/parrot.html)
* A page that makes a call to a [translation service](http://isithackday.com/arrpi.php) to convert user input to pirate speak, found in [learning/pirate.html](learning/pirate.html)

## Miscellaneous
Overall, we had a great time!  Thanks to everyone who joined us!  We hope you come to our [upcoming workshops](http://acm.missouri.edu/events) where you can learn even more about web development!  Spread the word and join us on [Facebook](https://www.facebook.com/groups/MizzouACM/?fref=ts)!

####Contributions
We happily accept any changes that improve the workshop code, as we'll probably be using it again!
We would also love to see any cool filters you come up with.
Lastly, if you find any mistakes, please open an issue or submit a pull request!
Thanks!

####Credit
Thanks to the great coders at [Hackers at Berkeley](http://hackersatberkeley.com/) for the inspiration and workshop idea!
