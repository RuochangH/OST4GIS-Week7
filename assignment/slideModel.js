/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
//This slide will show the aggregated observed bike departure in a week
var slideone = {
  slideNumber: 1,
  title: "Introduction of the Bike Share Departure Projection",
  filter: function(geojsonFeature) { return true }
};

//This slide will show the geographic variables used in the projection
var slidetwo = {
  slideNumber: 2,
  title: "Overview of the Independent Variables",
  filter: function(geojsonFeature) { return true }
};

//This slide will show the predicted bike departure
var slidethree = {
  slideNumber: 3,
  title: "Model Results",
  filter: function(geojsonFeature) { return true }
};

//This slide will show the prediction error of the prediction
var slidefour = {
  slideNumber: 4,
  title: "Model Residual",
  filter: function(geojsonFeature) { return true }
};

//This slide will show the difference between weekday prediction and weekend prediction
var slidefive = {
  slideNumber: 5,
  title: "Time Serial",
  filter: function(geojsonFeature) { return true }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slideone, slidetwo, slidethree, slidefour, slidefive]
