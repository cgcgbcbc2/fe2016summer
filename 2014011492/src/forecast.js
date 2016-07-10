function forecast(country, res) {
  var teams = [
  	"Switzerland",
  	"Poland",
  	"Croatia",
  	"Portugal",
  	"Wales",
  	"Northern Ireland",
  	"Hungary",
  	"Belgium",
  	"Germany",
  	"Slovakia",
  	"Italy",
  	"Spain",
  	"France",
  	"Republic of Ireland",
  	"England",
  	"Iceland"
  ];
  var a = [];
  var rate = [];
  var p = [];
  for (var index = 0; index < 16; index++) {
    a[index] = country[teams[index]];
  }
  for (var i = 0; i < 16; i++) {
    if (!rate[i]) rate[i] = [];
    if (!p[i]) p[i] = [];
    for (var j = 0; j < 16; j++) {
      if (a[i] === 0 && a[j] === 0) {
        rate[i][j] = 0.5;
      } else {
        rate[i][j] = a[i] / (a[i] + a[j]);
      }
    }
    p[i][0] = 1; //第0局获胜的概率为100%
  }
  var pp; // pp代表如果上轮已经获胜，该轮获胜的概率，r代表第几轮
  for (var r = 0; r < 4; r++) {
    for (i = 0; i < 16; i++) {
      pp = 0;
      for (k = (1 << r); k < (2 << r); k++) {
				pp += rate[i][i^k] * p[i^k][r]; // 条件概率公式
			}
      p[i][r+1] = p[i][r] * pp; // 条件概率公式
    }
  }
  return p[teams.indexOf(res)][4]; // 最后获胜的概率即第四轮获胜的概率
}



// aaa = {
//   	"Switzerland" : 20,
//   	"Poland" : 10,
//   	"Croatia" : 30,
//   	"Portugal" : 40,
//   	"Wales" : 30,
//   	"Northern Ireland" : 50,
//   	"Hungary" : 20,
//   	"Belgium" : 10,
//   	"Germany" : 40,
//   	"Slovakia" : 10,
//   	"Italy" : 10,
//   	"Spain" : 40,
//   	"France" : 20,
//   	"Republic of Ireland" : 30,
//   	"England" : 10,
//   	"Iceland" : 10
// };
