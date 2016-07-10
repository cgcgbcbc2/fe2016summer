function diff() {
  var length1 = arguments[0].length;
  var length2 = arguments[1].length;
  var res = [];
  var flag;
  for (var j = 0; j < length2; j++) {
    flag = true;
    for (var i = 0; i < length1; i++) {
      if (arguments[0][i].name == arguments[1][j].name) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res.push(arguments[1][j]);
    }
  }
  return res;
}


// o = [{name: "A", age: 20, hometown: "AA"}, {name: "B", age: 21, hometown: "BB"}, {name: "C", age: 20, hometown: "CC"},
// {name: "AA", age: 20, hometown: "AA"}, {name: "BB", age: 21, hometown: "BBB"}];
//
// oo = [{name: "A"}, {name: "QQ"}, {name:"BB"}, {name: "PP"}];
