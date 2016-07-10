function probability(a, b) {
	if (a == 0 && b == 0) return 0.5;
	else return a / (a + b);
}

function forecast() {
	var power = arguments[0];
	var p = new Array();
	var p1 = new Array();
	var p2 = new Array();
	var p3 = new Array();
	var p4 = new Array();
	var index = 0, i = 0;

	// 将输入的实力对象转化为数组
	// index为所求球队在数组中的下标
	for (x in power) {
		p.push(power[x]);
		if (x == arguments[1]) index = i;
		i++;
	}

	// 各队赢得第一局比赛的概率
	for (var i = 0; i < 8; i++) {
		p1[i*2] = probability(p[i*2], p[i*2+1]);
		p1[i*2+1] = probability(p[i*2+1], p[i*2]);
	}

	// 各队赢得第二局比赛的概率
	for (var i = 0; i < 4; i++) {
		p2[i*4] = p2[i*4+1] = p2[i*4+2] = p2[i*4+3] = 0;
		for (var j = 0; j < 2; j++) {
			for (var k = 0; k < 2; k++) {
				p2[i*4+j] += p1[i*4+2+k] * probability(p[i*4+j], p[i*4+2+k]);
				p2[i*4+2+j] += p1[i*4+k] * probability(p[i*4+2+j], p[i*4+k]);
			}
			p2[i*4+j] *= p1[i*4+j];
			p2[i*4+2+j] *= p1[i*4+2+j];
		}
	}

	// 各队赢得第三局比赛的概率
	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 8; j++) p3[i*8+j] = 0;
		for (var j = 0; j < 4; j++) {
			for (var k = 0; k < 4; k++) {
				p3[i*8+j] += p2[i*8+4+k] * probability(p[i*8+j], p[i*8+4+k]);
				p3[i*8+4+j] += p2[i*8+k] * probability(p[i*8+4+j], p[i*8+k]);
			}
			p3[i*8+j] *= p2[i*8+j];
			p3[i*8+4+j] *= p2[i*8+4+j];
		}
	}

	// 各队得冠军的概率
	for (var j = 0; j < 16; j++) p4[j] = 0;
	for (var j = 0; j < 8; j++) {
		for (var k = 0; k < 8; k++) {
			p4[j] += p3[8+k] * probability(p[j], p[8+k]);
			p4[8+j] += p3[k] * probability(p[8+j], p[k]);
		}
		p4[j] *= p3[j];
		p4[8+j] *= p3[8+j];
	}

	console.log(p4);
	return p4[index];
}


// 测试部分
// var power = {
// 	"Switzerland": 70,
// 	"Poland": 70,
// 	"Croatia": 30,
// 	"Portugal": 90,
// 	"Wales": 75,
// 	"Northern Ireland": 60,
// 	"Hungary": 20,
// 	"Belgium": 50,
// 	"Germany": 100,
// 	"Slovakia": 10,
// 	"Italy": 100,
// 	"Spain": 90,
// 	"France": 90,
// 	"Republic of Ireland": 80,
// 	"England": 100,
// 	"Iceland": 50
// };

// var ans = forecast(power, "Germany");
// console.log(ans);




