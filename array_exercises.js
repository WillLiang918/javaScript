"use strict";

Array.prototype.uniq = function () {

  var uniqEls = [];

  for (var i = 0; i < this.length; i++) {
    var match = false
    for (var j = 0; j < uniqEls.length; j++) {
      if (uniqEls[j] == this[i]) { match = true }
    }
    if (match == false) { uniqEls.push(this[i]) }
  }
  return uniqEls;
};

Array.prototype.twoSum = function () {

  var matchingPairs = [];

  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (!(this[i] + this[j])) {
        matchingPairs.push([i,j]);
      }
    }
  }

  return matchingPairs;

};

[-1, 0, 2, -2, 1].two_sum()

Array.prototype.transpose = function () {

  var transposedArray = [];

  for (var i = 0 ; i < this.length ; i++) {
    var subArray = []
    for (var j = 0 ; j < this[i].length ; j++) {
      subArray.push( this[j][i] );
    }

    transposedArray.push(subArray);
  }

  return (transposedArray);
}
