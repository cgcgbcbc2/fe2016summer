/**
 * Created by yangs on 7/3/2016.
 */
'use strict';

var diff = function (arr1, arr2) {
  var arr = arr2;
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i]['name'] === arr2[j]['name'])
        arr.splice(arr.indexOf(arr1[i]['name']), 1);
    }
  }
  return arr;
};
