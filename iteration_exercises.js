"use strict" ;

Array.prototype.bubbleSort = function () {
  var unsorted = true ;

  while (unsorted) {
    unsorted = false ;
    for (var i = 0; i < this.length - 1; i++ ) {
      for (var j = i + 1; j < this.length; j++) {
        if (this[i] > this[j]) {
          var temp = this[i];
          this[i] = this[j];
          this[j] = temp;
          unsorted = true;
        }
      };
    };
  };
  return this;
};

String.prototype.substrings = function () {
  var substrings = [] ;

  for (var i = 0; i < this.length; i++) {
    for (var j = 1; i + j <= this.length; j++) {
      substrings.push (this.substr(i , j))
    };
  };
  return substrings
};
