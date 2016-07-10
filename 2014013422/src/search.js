/**
 * Created by yangs on 7/3/2016.
 */

var search = function () {
  if (arguments.length !== 2)
    return 'Too many arguments.';
  else {
    if (typeof arguments[1] === 'number') {
      for (var i = 0; i < arguments[0].length; i++) {
        if (arguments[0][i]['age'] === arguments[1])
          return arguments[0][i];
      }
      return false;
    } else if (typeof arguments[1] === 'string') {
      for (var j = 0; j < arguments[0].length; j++) {
        if (arguments[0][j]['name'] === arguments[1])
          return arguments[0][j];
      }
      return false;
    } else if (typeof arguments[1] === 'object') {
      var result = new Array(arguments[0].length);
      for (var n = 0; n < result.length; n++) {
        result[n] = 0;
      }
      var target = Object.keys(arguments[1]);
      for (var m = 0; m < target.length; m++) {
        for (var k = 0; k < arguments[0].length; k++) {
          if (arguments[0][k][target[m]] === arguments[1][target[m]]) {
            result[k]++;
          }
        }
      }
      for (var l = 0; l < result.length; l++) {
        if (result[l] === target.length && result[l] !== 0)
          return arguments[0][l];
      }
      return false;
    }
  }
};
