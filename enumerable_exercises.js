Array.prototype.myEach = function (func) {
  for (var i = 0 ; i < this.length ; i++ ) {
    func(this[i]);
  }
} ;

Array.prototype.myMap = function (func) {
  var mappedArray = [];

  function halfWayFunc(num) {
    mappedArray.push(func(num))
  };

  this.myEach(halfWayFunc);

  // this.myEach(function (num) {
    // mappedArray.push(func(num))
  // });

  return mappedArray;
} ;

[1,2,3].myMap(function(num){
  console.log(num * 2);
  return(num * 2);
});


Array.prototype.myInject = function(passedFunc) {
  var acc ;

  function injectFunc(num) {
    if (typeof acc === "undefined") {
      acc = num;
    } else {
      acc = (passedFunc (acc, num));
    }
  };

  this.myEach(injectFunc)

  return acc
};

[1,2,3,4,5].myInject(function (acc, num) {
  return acc + num
});
