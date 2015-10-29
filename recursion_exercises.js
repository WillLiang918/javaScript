"use strict";

function range(start, end){
  if (end < start) {
    return ([]);
  };

  if (start === end) {
    return([end]);
  } else {
    var restOfRange = range(start, end - 1);
    restOfRange.push(end);
    return restOfRange;
  };
};

function exp(base, num) {
  if (num === 1) {
    return (base);
  } else if (num === 0) {
    return (1);
  } else if (num % 2 === 0) {
    return Math.pow(exp(base, num / 2), 2);
  } else {
    return base * exp(base, num - 1);
  }
};

function fib(n) {
  if (n <= 0 ) {
    return ([]);
  } else if (n === 1) {
    return ([0]);
  } else if (n === 2) {
    return ([0,1]);
  } else {
    var prevFib = fib(n-1);
    prevFib.push( prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2]);
    return prevFib;
  };
};

function bsearch(array, target){
  if (!array.length) {
    return (NaN);
  };


  var pivot = Math.floor(array.length / 2);
  if (array[pivot] === target ) {
    return pivot;
  };

  var left = array.slice(0, pivot);
  var right = array.slice(pivot + 1);

  if (target < array[pivot]) {
    return (bsearch (left, target));
  } else {
    return (pivot + 1 + (bsearch (right, target)));
  };

};

function makeChange(val, coins) {
  var bestChange;
  debugger
  for (var i = 0; i < coins.length; i++){
    var coin = coins[i];

    var remainingVal = (val - coin);
    if (!remainingVal) {
      return ([coin]);
    };

    if (remainingVal > 0) {

      var smallerCoins = (function (coins, coin) {
        var selectedCoins = [];
        for (var c = 0; c < coins.length; c++) {
          if( coins[c] <= coin) {
            selectedCoins.push(coins[c]);
          };
        };
        return selectedCoins;
      }());

      var change = (makeChange(remainingVal, smallerCoins)).concat([coin]);
      if ((typeof bestChange === "undefined") || (change.length < bestChange.length)) {
        bestChange = change;
      };
    }
  };
  return bestChange;
};
