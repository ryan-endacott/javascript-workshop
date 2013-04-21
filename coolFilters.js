
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
