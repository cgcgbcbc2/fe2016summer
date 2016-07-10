function search() {
  var res = [];
  var l = arguments[0].length;
  var student = {};
  if (typeof arguments[1] == "number") {
    for (var i = 0; i < l; i++) {
      if (arguments[0][i].age == arguments[1]) {
        res.push(arguments[0][i]);
      }
    }
    if (res.length === 0) {
      return false;
    } else {
      return res;
    }
  }

  if (typeof arguments[1] == "string") {
    for (var j = 0; j < l; j++) {
      if (arguments[0][j].name == arguments[1]) {
        return arguments[0][j];
      }
    }
    return false;
  }

  var flag;
  for (var k = 0; k < l; k++) {
    flag = true;
    for (var key in arguments[1]) {
      if (arguments[1].hasOwnProperty(key)) {
        if (arguments[0][k][key] != arguments[1][key]) {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      res.push(arguments[0][k]);
    }
  }
  if (res.length === 0) {
    return false;
  } else {
    return res;
  }
}

// o = [{name: "A", age: 20, hometown: "AA"}, {name: "B", age: 21, hometown: "BB"}, {name: "C", age: 20, hometown: "CC"},
// {name: "AA", age: 20, hometown: "AA"}, {name: "BB", age: 21, hometown: "BBB"}];
